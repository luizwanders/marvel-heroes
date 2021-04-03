import { useState, useEffect } from 'react'

import style from './index.module.scss'
import search from '@/assets/search.svg'
import Grid from '@/components/shared/Grid'

import { Api } from '@/services/api'

export default function Home() {
    const [data, setData] = useState([])

    useEffect(async () => {
        const result = await Api.getCharacters({ limit: 10 })
        setData(result.data.results)
    }, [])

    return (
        <div className="container">
            <div className={style.home}>
                <div className={style.searchContainer}>
                    <h1>Busca de personagens</h1>
                    <h2>Nome do personagem</h2>
                    <div className={style.inputContainer}>
                        <input type="text" placeholder="Buscar" />
                        <div>
                            <img src={search} alt="Buscar" />
                        </div>
                    </div>
                </div>
            </div>
            <Grid data={data} />
        </div>
    )
}
