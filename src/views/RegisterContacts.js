import { useEffect, useState, useContext } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { mask, unMask } from 'remask'

import FormGroup from '../Components/FormGroup'
import Modal from '../Components/Modal'
import { messageSuccess, messageError } from '../Components/Toast'
import Input from '../Components/Input'

import ContactService from '../app/service/ContactService'
import CategoryService from '../app/service/CategoryService'
import schema from '../app/service/ValidateContactForm'
import { IDContext } from '../Components/Provider'

function RegisterContact() {
  const [isVisible, setIsVisible] = useState(true)
  const { idContact, setIdContact } = useContext(IDContext)

  const history = useHistory()
  const service_contact = new ContactService()
  const service_category = new CategoryService()
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    document.addEventListener('keypress', handleOnChange)
    if (idContact !== '') {
      updateContactFunction()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function saveNewContact(data) {
    const contact = {
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      email: data.email,
      category: data.category,
    }

    if (idContact !== '') {
      contact.id = idContact

      await service_contact
        .updateContact(contact)
        .then((response) => {
          messageSuccess('Contato atualizado com sucesso')
          history.push('/contacts')
          setIsVisible(false)
          setIdContact('')
        })
        .catch((error) => {
          messageError(error.response.data)
        })
    } else {
      await service_contact
        .saveContact(contact)
        .then((response) => {
          messageSuccess('Contato cadastrado com sucesso!')
          history.push('/contacts')
          setIsVisible(false)
        })
        .catch((error) => {
          console.log(error)
          messageError(error)
        })
    }
  }

  async function updateContactFunction() {
    const contact = await service_contact.getById(idContact)
    const CONTACT_FIELDS = ['first_name', 'last_name', 'phone_number', 'email']
    CONTACT_FIELDS.forEach((fieldName) => {
      setValue(fieldName, contact[fieldName])
    })
  }

  function handleOnChange() {
    const originalValue = unMask(getValues('phone_number'))
    const maskedValue = mask(originalValue, [
      '(99) 9999-9999',
      '(99) 9 9999-9999',
      '+99 (99) 9999-9999',
    ])
    setValue('phone_number', maskedValue)
  }

  return (
    isVisible && (
      <Modal
        title="Inserir novo contato"
        visibility={isVisible}
        action={handleSubmit(saveNewContact)}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-component">
              <form>
                <FormGroup label="Nome: *" htmlFor="input_first_name">
                  <Input
                    className="form-control"
                    data-test="input_first_name"
                    id="input_first_name"
                    placeholder="Digite o Nome"
                    type="text"
                    register={register('first_name')}
                    error={errors?.first_name}
                  />
                </FormGroup>

                <FormGroup label="Sobrenome: *" htmlFor="input_last_name">
                  <Input
                    className="form-control"
                    data-test="input_last_name"
                    id="input_last_name"
                    placeholder="Digite o Sobrenome"
                    type="text"
                    register={register('last_name')}
                    error={errors?.last_name}
                  />
                </FormGroup>

                <FormGroup label="Telefone: *" htmlFor="input_phone_number">
                  <Input
                    type="text"
                    className="form-control"
                    data-test="input_phone_number"
                    id="input_phone_number"
                    onChange={handleOnChange}
                    register={register('phone_number')}
                    error={errors?.phone_number}
                  />
                </FormGroup>

                <FormGroup label="Email:" htmlFor="input_email">
                  <Input
                    type="email"
                    className="form-control"
                    data-test="input_email"
                    id="input_email"
                    placeholder="Digite o Email"
                    register={register('email')}
                    error={errors?.email}
                  />
                </FormGroup>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    )
  )
}

export default withRouter(RegisterContact)
