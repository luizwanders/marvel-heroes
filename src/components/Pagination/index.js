import PropTypes from 'prop-types'

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export default function Pagination({ limit, total, offset, setOffset }) {
    const current = offset ? offset / limit + 1 : 1
    const pages = Math.ceil(total / limit)
    const first = Math.max(current - MAX_LEFT, 1)

    function onPageChange(page) {
        setOffset((page - 1) * limit)
    }

    const _PAGES = Array.from({ length: Math.min(MAX_ITEMS, pages) }).map(
        (_, index) => index + first,
    )

    return (
        <ul className="pagination">
            <li>
                <button onClick={() => onPageChange(current - 1)} disabled={current === 1}>
                    Anterior
                </button>
            </li>
            {_PAGES.map((page) => (
                <li key={page}>
                    <button
                        onClick={() => onPageChange(page)}
                        className={page === current ? 'pagination__item--active' : null}>
                        {page}
                    </button>
                </li>
            ))}
            <li>
                <button onClick={() => onPageChange(current + 1)} disabled={current === pages}>
                    Próxima
                </button>
            </li>
        </ul>
    )
}

Pagination.propTypes = {
    limit: PropTypes.number,
    total: PropTypes.number,
    offset: PropTypes.number,
    setOffset: PropTypes.number,
}