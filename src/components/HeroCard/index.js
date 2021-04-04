import PropTypes from 'prop-types'

import style from './index.module.scss'

export default function HeroCard({ data }) {
    return (
        <di className={style.HeroCard}>
            <div className={style.cover}>
                <img
                    width="400"
                    src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    alt={data.name}
                />
            </div>

            <h1>{data.name}</h1>
            <p>{data.description}</p>
        </di>
    )
}

HeroCard.propTypes = {
    data: PropTypes.array,
}
