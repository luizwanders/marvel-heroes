import PropTypes from 'prop-types'
import style from './index.module.scss'
import AnimatedNumber from 'animated-number-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function HeroCard({ data, comics }) {
    const formatNumber = (value) => value.toFixed(0)

    const settings = {
        dots: true,
        infinite: comics.length > 6,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        className: 'slide',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                },
            },
        ],
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
                            <div className="slide">
                                <img
                                    src={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
                                    alt={item.title}
                                    height="200"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <br />

            <div className={style.marvelCredits}>
                <a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>
            </div>
        </div>
    )
}

HeroCard.propTypes = {
    data: PropTypes.object,
    comics: PropTypes.array,
}
