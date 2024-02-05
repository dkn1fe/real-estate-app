import logo from '../../../img/header/logo.png'
import './Logo.scss'

const HeaderLogo = () => {
    return (
        <>
         <div className="header-logo">
            <img src = {logo}></img>
            <h3>Estatein</h3>
         </div>
        </>
    )
}

export default HeaderLogo