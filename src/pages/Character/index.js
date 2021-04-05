import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Api } from '@/services/api'
import HeroCard from '@/components/HeroCard'

import Loader from '@/components/Loader'

export default function Character() {
    const { id } = useParams()

    const [data, setData] = useState([])
    const [comics, setComics] = useState([])

    useEffect(async () => {
        const result = await Api.getCharacterInfo(id)
        const comicsResult = await Api.getCharacterComics(id)

        setData(result.data.results[0])
        setComics(comicsResult.data.results)
    }, [])

    if (data.length === 0) {
        return <Loader />
    }

    return (
        <div className="container">
            <HeroCard data={data} comics={comics} />
        </div>
    )
}
