import React from 'react'

export default function Table(props) {
  const rows = props.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>{contact.first_name}</td>
        <td>{contact.last_name}</td>
        <td>{contact.phone_number}</td>
        <td>{contact.email}</td>
        <td>
          <button onClick={props.service.deleteContact(contact.id)}>
            Deletar
          </button>
        </td>
        <td>
          <button onClick={props.service.updateContact(contact.id)}>
            Atualizar
          </button>
        </td>
      </tr>
    )
  })

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Sobrenome</th>
          <th scope="col">Tipo</th>
          <th scope="col">Telefone</th>
          <th scope="col">Email</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
