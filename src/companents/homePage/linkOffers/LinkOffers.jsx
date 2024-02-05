import firstLinkImg from '../../../img/link/firstLinkImg.svg'
import './LinkOffers.scss'

const LinkOffers = () => {
    return (
        <>
         <div className="link-card">
             <div className="link-arrow">
                <img src = {arrow}></img>
             </div>
             <div className="link-img">
                <img src  = {firstLinkImg}></img>
             </div>
             <div className="link-text">
                <p>Find you Dream Home</p>
             </div>
         </div>
        </>
    )
}

export default LinkOffers