import React from 'react'
import Card from '../Components/Card'

function About() {
  return (
    <div className="container" text-align="center">
      <Card title="Agenda de Contatos">
        <div className="row">
          <div className="col-6 .col-md-4">
            <div className="bs-component">
              <p>Bem vindo a Agenda de Contatos</p>
              <p>
                Para adicionar um contato basta entrar em registro e cadastrar
              </p>
              <p>Os contatos são salvos localmente</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default About
