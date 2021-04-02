import { getAuthkey } from '@/utils/getAuthkey'

export default async function Request(resource, data = null) {
    let paramsData = {}

    const time = new Date().getTime()

    paramsData.ts = time
    paramsData.apikey = process.env.REACT_APP_MARVEL_PUBLIC_KEY
    paramsData.hash = getAuthkey(time)

    if (data && typeof data === 'object' && data !== null) {
        paramsData = { ...data, ...paramsData }
    }

    const params = new URLSearchParams(paramsData)

    // eslint-disable-next-line no-undef
    const baseUrl = process.env.REACT_APP_MARVEL_API_URL

    let url = ''

    if (resource.startsWith('http://')) {
        url = `${resource}?${params}`
    } else {
        url = `${baseUrl}/${resource}?${params}`
    }

    const response = await fetch(url)

    if (response.status >= 200 && response.status <= 299) {
        const result = await response.json()
        return result
    } else {
        console.log(response.status, response.statusText)
        throw new Error(response.statusText)
    }
}
