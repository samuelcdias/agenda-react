import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { IDContext } from './Provider'

export default function Table(props) {
  const { setIdContact, setUpdateTable } = useContext(IDContext)
  const history = useHistory()

  function updateValue(id) {
    setIdContact(id)
    history.push('/contacts/register')
  }
  async function deleteContact(id) {
    await props.service.deleteContact(Number(id)).then(() => {
      setUpdateTable(true)
    })
  }

  const rows = props.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td className="text-center">
          {contact.first_name} {contact.last_name}
        </td>
        <td className="text-center">{contact.phone_number}</td>
        <td className="text-center">{contact.email}</td>
        <td className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={async () => deleteContact(contact.id)}
          >
            Deletar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => updateValue(contact.id)}
          >
            Atualizar
          </button>
        </td>
      </tr>
    )
  })

  return (
    <table className="table table-hover table-striped ">
      <thead>
        <tr>
          <th scope="col" className="text-center">
            Nome
          </th>
          <th scope="col" className="text-center">
            Telefone
          </th>
          <th scope="col" className="text-center">
            Email
          </th>
          <th scope="col" className="text-center">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
