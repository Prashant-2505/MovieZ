import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWraper/ContentWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Trending = () => {


    const [endPoint, setEndPont] = useState('day')
    const {data, loading} = useFetch(`/trending/all/${endPoint}`)
    const onTabChange = (tab) => {
        setEndPont(tab==='day'?'day':'week')
    }

    return (
        <div className='carouselSection'>
            <ContentWrapper >
                <span className="carouselTitle">Trending</span>
                <SwitchTab data={["day", "week"]} onTabChange={onTabChange} />
            </ContentWrapper>

            <Carousel data={data?.results} loading={loading}/>
        </div>
    )
}

export default Trending
