import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <div>
                <AiFillPhone id="phone-icon"/>
                <h3>Telefone</h3>
                <p>(85) 98620-9984</p>
            </div>
        </div>

        <div className="info-card">
            <div>
                <AiOutlineMail id="email-icon"/>
                <h3>E-mail</h3>
                <p>vianasfabricio@gmail.com</p>
            </div>
        </div>
        <div className="info-card">    
            <div>
                <AiFillEnvironment id="pin-icon"/>
                <h3>Localização</h3>
                <p>Fortaleza - CE</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer