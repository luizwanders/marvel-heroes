import { useState, useEffect } from 'react'

import style from './index.module.scss'
import search from '@/assets/search.svg'
import Grid from '@/components/shared/Grid'

import { Api } from '@/services/api'

export default function Home() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(async () => {
        setLoading(true)
        const result = await Api.getCharacters({ limit: 10 })
        setLoading(false)
        setData(result.data.results)
    }, [])

    const renderLoading = () => <h1>Carregando...</h1>

    return (
        <div className="container">
            <div className={style.home}>
                <div className={style.searcContainer}>
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
            {loading ? renderLoading : <Grid data={data} />}
        </div>
    )
}
