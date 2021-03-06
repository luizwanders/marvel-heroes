import style from './index.module.scss'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import useDeviceDetect from '@/utils/useDeviceDetect'

export default function Grid({ data }) {
    const { isMobile } = useDeviceDetect()

    const renderSeries = (items) => {
        if (!items.length) {
            return <p>Nenhuma série</p>
        }

        if (items.length > 3) {
            return items.slice(0, 3).map((serie, i) => <p key={i}>{serie.name}</p>)
        }

        return items.map((serie, i) => <p key={i}>{serie.name}</p>)
    }

    const renderEvents = (items) => {
        if (!items.length) {
            return <p>Nenhum evento</p>
        }

        if (items.length > 3) {
            return items.slice(0, 3).map((serie, i) => <p key={i}>{serie.name}</p>)
        }

        return items.map((serie, i) => <p key={i}>{serie.name}</p>)
    }

    if (!data.length) {
        return (
            <p>
                <strong>Ops!</strong> não encontramos esse personagem :(
            </p>
        )
    }

    return (
        <div>
            <div className={style.header}>
                <div className={style.headerCell}>Personagem</div>
                <div style={{ display: isMobile ? 'none' : '' }} className={style.headerCell}>
                    Série
                </div>
                <div style={{ display: isMobile ? 'none' : '' }} className={style.headerCell}>
                    Eventos
                </div>
            </div>

            {data.map((item, index) => (
                <Link key={index} to={`/character/${item.id}`}>
                    <div className={style.row}>
                        <div className={style.cell}>
                            <img
                                src={`${item.thumbnail.path}/standard_medium.${item.thumbnail.extension}`}
                                alt={'personagem'}
                                width="48"
                            />
                            <span className={style.characterName}>{item.name}</span>
                        </div>
                        <div
                            style={{ display: isMobile ? 'none' : '' }}
                            className={`${style.cell} ${style.series}`}>
                            <div>{renderSeries(item.series.items)}</div>
                        </div>
                        <div
                            style={{ display: isMobile ? 'none' : '' }}
                            className={`${style.cell} ${style.events}`}>
                            <div>{renderEvents(item.events.items)}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

Grid.propTypes = {
    data: PropTypes.array,
}
