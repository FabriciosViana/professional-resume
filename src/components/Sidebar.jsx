import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import Avatar from '../img/hero.png'
import '../styles/components/sidebar.sass'
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Fabricio Viana" />
      <p className="tittle"> Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a className="btn" href="#">Download Currículo</a>
    </aside>
  )
}

export default Sidebar