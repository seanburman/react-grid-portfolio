import { changeView } from "../../../helpers/viewHelpers";
import './Clients.css'
export default function Clients() {
    return (
        <div className="grid-container-col-1 fade-in">
            <div className="grid-container-client">
                <div className="client-description-container">
                <p className="client-description">Nathalie Anne is a multi-disciplinary creative with a passion for graphic design, illustration, and branding.</p>
                </div>
                <div className="logo-container">
                    <img 
                        src="/img/NathalieLogo.png" 
                        alt="Nathalie Anne Design" 
                        className="client-logo"/>
                </div>
                <div className="client-button-container">
                <a className="client-link" href="https://nathalieannedesign.com" target="blank">
                    <button className="client-button">See More</button>
                </a>
                </div>
            </div>

        <div className="hz-rule"></div>

            <div className="grid-container-client">
                <div className="client-description-container">
                <p className="client-description">Catherine Clark Connects is a boutique mental health consulting firm that specializes in helping individuals and organizations proactively address mental health, create a safe space for vulnerable conversations, and build more meaningful, fulfilled lives.</p>
                </div>
                <div className="logo-container">
                    <img 
                        src="/img/catherine-logo.png" 
                        alt="Catherine Clark Connects" 
                        className="client-logo"/>
                </div>
                <div className="client-button-container">
                <a className="client-link" href="https://catherineclarkconnects.com" target="blank">
                    <button className="client-button">See More</button>
                </a>
                </div>
            </div>
        
            
        <div className="hz-rule"></div>
        <p>If you like my work and would like a free consultation on your own web project,
        feel free to contact me and I will respond within 24 hours.</p>
        <button className="form-button" onClick={() => changeView('Contact')}>Contact Me</button>
        </div>
    )
}