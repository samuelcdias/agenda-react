import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FormGroup from '../Components/FormGroup'
import Modal from '../Components/Modal'

import ContactService from '../app/service/ContactService'
import CategoryService from '../app/service/CategoryService'

import { messageSuccess, messageError } from '../Components/Toast'

class RegisterContact extends Component {
  constructor() {
    super()
    this.service_contact = new ContactService()
    this.service_category = new CategoryService()
  }

  state = {
    visible: true,
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    category: '',
  }

  validate() {
    const msgs = []
    if (!this.state.first_name) {
      msgs.push('O campo Nome é obrigatório.')
    }
    if (!this.state.last_name) {
      msgs.push('O campo Nome é obrigatório.')
    }

    const phoneRegExp =
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/
    if (!this.state.phone_number) {
      msgs.push('O campo telefone é obrigatório.')
    } else if (!this.state.phone_number.match(phoneRegExp)) {
      msgs.push('Informe o número de telefone com ddd.')
    }

    return msgs
  }

  register = () => {
    const msgs = this.validate()

    if (msgs && msgs.length > 0) {
      msgs.forEach((msg) => {
        messageError(msg)
      })
      return false
    }

    const contact = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_number: this.state.phone_number,
      email: this.state.email,
      category: this.state.category,
    }

    this.service_contact
      .saveContact(contact)
      .then((response) => {
        messageSuccess('Contato cadastrado com sucesso!')
        this.props.history.push('/contacts')
      })
      .catch((error) => {
        messageError({ title: 'Erro', description: error.response.data })
      })
  }

  render() {
    return (
      this.state.visible && (
        <Modal title="Inserir novo contato" action={this.register}>
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlFor="input_first_name">
                  <input
                    type="text"
                    className="form-control"
                    data-test="input_first_name"
                    id="input_first_name"
                    name="nome"
                    onChange={(e) =>
                      this.setState({ first_name: e.target.value })
                    }
                    placeholder="Digite o Nome"
                  />
                </FormGroup>

                <FormGroup label="Sobrenome: *" htmlFor="input_last_name">
                  <input
                    type="text"
                    className="form-control"
                    data-test="input_last_name"
                    id="input_last_name"
                    name="nome"
                    onChange={(e) =>
                      this.setState({ last_name: e.target.value })
                    }
                    placeholder="Digite o Sobrenome"
                  />
                </FormGroup>

                <FormGroup label="Telefone: *" htmlFor="input_phone_number">
                  <input
                    type="text"
                    className="form-control"
                    data-test="input_phone_number"
                    id="input_phone_number"
                    name="nome"
                    onChange={(e) =>
                      this.setState({ phone_number: e.target.value })
                    }
                    placeholder="Digite o Telefone"
                  />
                </FormGroup>

                <FormGroup label="Email: *" htmlFor="input_email">
                  <input
                    type="email"
                    className="form-control"
                    data-test="input_email"
                    id="input_email"
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    placeholder="Digite o Email"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </Modal>
      )
    )
  }
}

export default withRouter(RegisterContact)
