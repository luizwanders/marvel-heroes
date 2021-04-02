import { getAuthkey } from './utils/getAuthkey'
import { parseTemplateString } from './utils/parseTemplateString'

const time = new Date().getTime()

const stringData = {
    resource: 'characters',
    time,
}

const url = parseTemplateString(process.env.REACT_APP_MARVEL_API_URL, stringData)

export default function formatURL(resource = 'characters') {
    const time = new Date().getTime()
    const key = process.env.REACT_APP_MARVEL_PUBLIC_KEY
    const hash = getAuthkey(time)
    const auth = `ts=${time}&apikey=${key}&hash=${hash}`

    return `/${resource}?${auth}`
}
