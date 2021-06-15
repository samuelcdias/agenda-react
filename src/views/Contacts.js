import React, { useEffect, useState, useContext } from 'react'
import Table from '../Components/table'
import Register from './RegisterContacts'
import Card from '../Components/Card'
import ContactService from '../app/service/ContactService'
import { IDContext } from '../Components/Provider'

function Contacts() {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    contacts: [],
  })
  const { updateTable, setUpdateTable } = useContext(IDContext)

  const service = new ContactService()
  useEffect(() => {
    getList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (updateTable === true) {
      getList()
      setUpdateTable(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTable])

  async function getList() {
    const list = await service.getAllContacts()
    setState({ contacts: list })
  }
  return (
    <div className="container">
      <Card title="Contatos">
        <div className="row">
          <div className="col-md-12">
            <div className="bs-component">
              <Table contacts={state.contacts || []} service={service} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Contacts
