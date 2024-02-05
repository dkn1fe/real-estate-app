import './DiscoverRaitingBlock.scss'

const DiscoverRaitingBlock = () => {
    const discoverBlockCardsInfo = [
        {title:'200+',text:'Happy Customers'},
        {title:'10k+',text:'Properties For Clients'},
        {title:'16+',text:'Years of Experience'},
    ]
    const discoverBlockCards = discoverBlockCardsInfo.map(({title,text})=>{
        return (
            <div className="discover-block">
            <div className="discover-block-container">
                <div className="discover-block-title">
                   <h3>{title}</h3>
                </div>
                <div className="discover-block-subtitle">
                    <p>{text}</p>
                </div>
            </div>
        </div>
        )
    })
    
     return (
        <>
          <div className='discover-cards'>
          {discoverBlockCards}
          </div>
        </>
     )
}
export default DiscoverRaitingBlock;