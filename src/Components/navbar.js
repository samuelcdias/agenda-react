import React from 'react'
import NavBarItem from './navbarItem'

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div className="container">
        <a href="#/home" className="navbar-brand">
          Agenda de Contatos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <NavBarItem href="#/contacts" label="Contatos" />
            <NavBarItem href="#/contacts/register" label="Registrar" />
            <NavBarItem href="#/about" label="Sobre" />
          </ul>
          <form className="d-flex" float="right">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Pesquisar Contato"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Pesquisar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Navbar
