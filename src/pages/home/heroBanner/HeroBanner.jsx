import React, { useEffect, useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWraper/ContentWrapper'



const HeroBanner = () => {

    const [background, setBackground] = useState('')
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const { url } = useSelector((state) => state.home)
    const { data, loading } = useFetch('/movie/upcoming')
    useEffect(() => {
        // so here we want to add some image randomly when we load 
        // no we got data then results of data have many results of 20 thats why we multiply it wiht 20 
        // then we use math.random to get random data from result every time and it may be give some decimel thats why we useing floor with it 
        // .backdrop path give background image 
        const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data])

    const serachQueryHandler = (e) => {
        if (e.key === 'Enter' && query.length > 0) {
            navigate(`/serch/${query}`)
        }
    }


    return (
        <div className='heroBanner'>
            {!loading && <div className="backdrop-img">
                <Img src={background} />
            </div>}

            <div className="opacity-layer">

            </div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title"> Welcome.</span>
                    <span className="subTitle">Millions of movies, Tv shows and people to discover.
                        Explore now.</span>

                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder='Search for movie or tv shows'
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={serachQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>

            </ContentWrapper>
        </div>
    )
}

export default HeroBanner
