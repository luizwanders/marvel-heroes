import { useState, useEffect } from 'react'
import style from './index.module.scss'
import search from '@/assets/search.svg'
import Grid from '@/components/shared/Grid'
import { Api } from '@/services/api'
import Pagination from '@/components/Pagination'

import Loader from '@/components/Loader'

const LIMIT = 10

export default function Home() {
    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('')
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)

    const changeText = (e) => {
        const text = e.target.value
        setSearchText(text)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            processSearch()
        }
    }

    const processSearch = async () => {
        const params = {}
        params.limit = LIMIT
        if (searchText.trim() !== '') {
            params.nameStartsWith = searchText
        }

        const result = await Api.getCharacters(params)
        setData(result.data.results)
        setTotal(result.data.total)
    }

    const changePage = async (offset) => {
        const params = {}
        params.limit = LIMIT
        params.offset = offset

        if (searchText.trim() !== '') {
            params.nameStartsWith = searchText
        }

        const result = await Api.getCharacters(params)

        setData(result.data.results)
        setTotal(result.data.total)
        setOffset(offset)
        window.scrollTo(0, 126)
    }

    useEffect(async () => {
        try {
            const result = await Api.getCharacters({ limit: LIMIT })
            setData(result.data.results)
            setTotal(result.data.total)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <main style={{ padding: '0 24px' }}>
                <div className="container">
                    <div className={style.home}>
                        <div className={style.searchContainer}>
                            <h1>Busca de personagens</h1>
                            <h2>Nome do personagem</h2>
                            <div className={style.inputContainer}>
                                <input
                                    type="text"
                                    onChange={changeText}
                                    onKeyPress={handleKeyPress}
                                    value={searchText}
                                    placeholder="Buscar"
                                />
                                <div className={style.searchButton} onClick={processSearch}>
                                    <img src={search} alt="Buscar" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Grid data={data} />
                </div>
            </main>

            {total > LIMIT && (
                <Pagination limit={LIMIT} total={total} offset={offset} setOffset={changePage} />
            )}
        </>
    )
}
