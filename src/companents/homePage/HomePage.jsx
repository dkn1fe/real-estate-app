import Header from './header/Header';
import LinkOffers from './linkOffers/LinkOffers';
import DiscoverYouDream from './discoverYouDream/DiscoverYouDream';
import './HomePage.scss'

const HomePage = () => {
    return (
        <>
        <header className="header">
         <div className="container">
           <Header/> 
           </div>
        </header>
        <section className='discover-you-dream'>
            <div className='container'>
            <DiscoverYouDream/>
            </div>
        </section>
        <section className='offers-link'>
             <LinkOffers/>
        </section>
     </>
    )
}

export default HomePage