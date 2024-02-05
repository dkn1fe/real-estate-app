import Logo from '../header/logo/Logo'
import NavButtons from './nav-buttons/Nav-buttons';
import ContactUs from './contactUs/ContactUs';
import './Header.scss'

const Header = () => {
    return (
        <>
            <div className='header-app'>
                <div className="logo">
                    <Logo />
                </div>
                <div className='header-nav'>
                    <NavButtons />
                </div>
                <div className='header-contact'>
                     <ContactUs/>
                </div>
            </div>
        </>
    )
}

export default Header;