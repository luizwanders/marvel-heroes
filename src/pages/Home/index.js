import { useState, useEffect } from 'react'

import style from './index.module.scss'
import search from '@/assets/search.svg'
import Grid from '@/components/shared/Grid'

import { Api } from '@/services/api'

export default function Home() {
    const [data, setData] = useState([])
    const [searchText, setSearchText] = useState('')

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
        params.limit = 10
        if (searchText.trim() !== '') {
            params.nameStartsWith = searchText
        }
        const result = await Api.getCharacters(params)
        setData(result.data.results)
    }

    useEffect(async () => {
        try {
            const result = await Api.getCharacters({ limit: 10 })
            setData(result.data.results)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
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
    )
}
