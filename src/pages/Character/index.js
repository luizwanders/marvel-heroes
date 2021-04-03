import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Api } from '@/services/api'

export default function Character() {
    const { id } = useParams()

    const [data, setData] = useState([])

    useEffect(async () => {
        const result = await Api.getCharacterInfo(id)
        setData(result.data.results[0])
    }, [])

    if (data.length === 0) {
        return <p>falha ao obter dados</p>
    }

    return (
        <div className="container">
            <h1>{data.name}</h1>
            <img
                width="400"
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
            />
            <p>{data.description}</p>
        </div>
    )
}
