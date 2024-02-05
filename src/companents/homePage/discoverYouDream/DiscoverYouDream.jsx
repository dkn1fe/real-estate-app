import DiscoverText from "./discoverText/DiscoverText"
import DiscoverButton from "./discoverButton/DiscoverButton"
import DiscoverRaitingBlock from "./discoverRaitingBlock/DiscoverRaitingBlock"
import DiscoverImg from "./discoverImg/DiscoverImg"
import './DiscoverYouDream.scss'
import '../../../App.scss'


const DiscoverYouDream = () => {
    return (
        <>
            <div className="discover">
                    <div className="discover-content-text">
                        <div className="discover-text">
                            <DiscoverText />
                        </div>
                        <div className="discover-buttons">
                            <DiscoverButton />
                        </div>
                        <div className="discover-raiting-block">
                            <DiscoverRaitingBlock />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default DiscoverYouDream