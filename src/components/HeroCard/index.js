import PropTypes from 'prop-types'

import style from './index.module.scss'

import AnimatedNumber from 'animated-number-react'

export default function HeroCard({ data }) {
    const formatNumber = (value) => value.toFixed(0)

    return (
        <di className={style.HeroCard}>
            <div className={style.cover}>
                <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt={data.name} />
            </div>
            <h1>{data.name}</h1>

            <div className={style.stats}>
                <div>
                    <AnimatedNumber value={data.comics.available} formatValue={formatNumber} />
                    <span className={style.statName}>HQs</span>
                </div>
                <div>
                    <AnimatedNumber value={data.series.available} formatValue={formatNumber} />
                    <span className={style.statName}>SÉRIES</span>
                </div>
                <div>
                    <AnimatedNumber value={data.events.available} formatValue={formatNumber} />
                    <span className={style.statName}>EVENTOS</span>
                </div>
            </div>

            <p className={style.description}>{data.description}</p>
        </di>
    )
}

HeroCard.propTypes = {
    data: PropTypes.array,
}
