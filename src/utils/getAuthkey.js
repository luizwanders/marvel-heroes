import md5 from 'md5'

export const getAuthkey = (ts) => {
    if (process.env.REACT_APP_MARVEL_PRIVATE_KEY && process.env.REACT_APP_MARVEL_PUBLIC_KEY) {
        const { REACT_APP_MARVEL_PRIVATE_KEY, REACT_APP_MARVEL_PUBLIC_KEY } = process.env

        return md5(ts + REACT_APP_MARVEL_PRIVATE_KEY + REACT_APP_MARVEL_PUBLIC_KEY)
    } else {
        throw new Error('Missing enviroment variables')
    }
}
