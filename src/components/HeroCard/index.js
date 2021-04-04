import PropTypes from 'prop-types'

import style from './index.module.scss'

import AnimatedNumber from 'animated-number-react'

import Slider from 'react-slick'

export default function HeroCard({ data, comics }) {
    const formatNumber = (value) => value.toFixed(0)

    const settings = {
        dots: true,
        infinite: comics.length > 6,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        autoplay: true,
    }

    return (
        <div className={style.HeroCard}>
            <div className={style.cover}>
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} />
            </div>
            <h1>{data.name}</h1>

            <div className={style.stats}>
                <div>
                    <AnimatedNumber value={data.comics.available} formatValue={formatNumber} />
                    <span className={style.statName}>
                        {data.comics.available === 1 ? 'HQ' : 'HQs'}
                    </span>
                </div>
                <div>
                    <AnimatedNumber value={data.series.available} formatValue={formatNumber} />
                    <span className={style.statName}>
                        {data.series.available === 1 ? 'SÉRIE' : 'SÉRIES'}
                    </span>
                </div>
                <div>
                    <AnimatedNumber value={data.events.available} formatValue={formatNumber} />
                    <span className={style.statName}>
                        {data.events.available === 1 ? 'EVENTO' : 'EVENTOS'}
                    </span>
                </div>
            </div>

            <p className={style.description}>{data.description}</p>

            <div style={{ marginBottom: '30px' }}>
                <Slider {...settings}>
                    {comics.map((item) => (
                        <div key={item.id}>
                            <img
                                src={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
                                alt={item.title}
                                height="200"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <br />

            <div>
                <a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>
            </div>
        </div>
    )
}

HeroCard.propTypes = {
    data: PropTypes.object,
    comics: PropTypes.array,
}
