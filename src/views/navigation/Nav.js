

import { changeView } from '../../helpers/viewHelpers'
import './Nav.css'

export default function Nav() {

    return (
        <div className="grid-item nav fade-in">
        <button className="nav-button" onClick={() => changeView('About')}>
          <i className="fas fa-user"></i><br />
          About
        </button>

        <button className="nav-button" onClick={() => changeView('Projects')}>
        <i className="fas fa-hammer"></i><br />
        Projects
        </button>

        <button className="nav-button" onClick={() => changeView('Clients')}>
          <i className="fas fa-handshake"></i><br />
          Clients
        </button>

        <button className="nav-button" onClick={() => changeView('Contact')}>
          <i className="fas fa-phone"></i><br />
          Contact
        </button>

      </div>
    )
}