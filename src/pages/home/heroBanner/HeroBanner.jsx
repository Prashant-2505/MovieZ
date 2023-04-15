import React from 'react'
import './style.scss'

const HeroBanner = () => {
    return (
        <div className='heroBanner'>
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title"> Welcome.</span>
                    <span className="subTitle">Millions of movies, Tv shows and people to discover.
                        Explore now.</span>
                </div>
                <div className="searchInput">
                    <input
                        type="text"
                        placeholder='Search for movie or tv shows'
                    />
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
