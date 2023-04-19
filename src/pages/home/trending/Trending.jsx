import React from 'react'
import ContentWrapper from '../../../components/contentWraper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'

 const onTabChange = (tab)=>
 {

 }

const Trending = () => {
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTab data={["Day, Week"]} onTabChange={onTabChange}/>
            </ContentWrapper>
        </div>
    )
}

export default Trending
