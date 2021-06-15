import React, { useEffect, useState } from 'react'
import Table from '../Components/table'
import Register from './RegisterContacts'
import Card from '../Components/Card'
import ContactService from '../app/service/ContactService'

function Contacts() {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    contacts: [],
  })

  const service = new ContactService()
  useEffect(() => {
    getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getList() {
    const list = await service.getAllContacts()
    setState({ contacts: list })
    console.log(list)
    console.log(state)
  }
  return (
    <div className="container">
      <Card title="Contatos">
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <Table contacts={state.contacts || []} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Contacts
