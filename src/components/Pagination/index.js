import PropTypes from 'prop-types'
import style from './index.module.scss'
import useDeviceDetect from '@/utils/useDeviceDetect'

export default function Pagination({ limit, total, offset, setOffset }) {
    const { isMobile } = useDeviceDetect()

    const MAX_ITEMS = isMobile ? 3 : 5
    const MAX_LEFT = (MAX_ITEMS - 1) / 2

    const current = offset ? Math.round(offset / limit + 1) : 1
    const pages = Math.ceil(total / limit)
    const first = Math.max(current - MAX_LEFT, 1)

    function onPageChange(page) {
        setOffset((page - 1) * limit)
    }

    let computedPages = Array.from({ length: Math.min(MAX_ITEMS, pages) }).map(
        (_, index) => index + first,
    )

    const lastPage = current + MAX_LEFT > pages

    if (lastPage) {
        const lastPageOffset = MAX_ITEMS - MAX_LEFT
        computedPages = computedPages.slice(0, lastPageOffset)
    }

    return (
        <div className={style.pagination}>
            <div className="container">
                <ul>
                    {current > 1 && (
                        <li>
                            <div onClick={() => onPageChange(1)} className={style.first}>
                                <svg
                                    width="14"
                                    viewBox="0 0 220.682 220.682"
                                    transform="rotate(180)"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="92.695 38.924 164.11 110.34 92.695 181.76 120.98 210.04 220.68 110.34 120.98 10.639" />
                                    <polygon points="28.284 210.04 127.99 110.34 28.284 10.639 0 38.924 71.417 110.34 0 181.76" />
                                </svg>
                            </div>
                        </li>
                    )}
                    {current > 1 && (
                        <li>
                            <button
                                className={style.prev}
                                onClick={() => onPageChange(current - 1)}
                                disabled={current === 1}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    width="20px">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
                                </svg>
                            </button>
                        </li>
                    )}
                    {computedPages.map((page) => (
                        <li key={page}>
                            <button
                                onClick={() => onPageChange(page)}
                                className={page === current ? style.paginationActive : style.page}>
                                {page}
                            </button>
                        </li>
                    ))}
                    {current < pages && (
                        <li>
                            <button
                                className={style.next}
                                onClick={() => onPageChange(current + 1)}
                                disabled={current === pages}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    width="20px">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
                                </svg>
                            </button>
                        </li>
                    )}
                    {current < pages && (
                        <li>
                            <div onClick={() => onPageChange(pages)} className={style.last}>
                                <svg
                                    width="14"
                                    viewBox="0 0 220.682 220.682"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="92.695 38.924 164.11 110.34 92.695 181.76 120.98 210.04 220.68 110.34 120.98 10.639" />
                                    <polygon points="28.284 210.04 127.99 110.34 28.284 10.639 0 38.924 71.417 110.34 0 181.76" />
                                </svg>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    limit: PropTypes.number,
    total: PropTypes.number,
    offset: PropTypes.number,
    setOffset: PropTypes.func,
}
