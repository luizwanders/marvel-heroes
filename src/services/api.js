import Request from './request'

export const Api = {
    get: async function (url) {
        try {
            return await Request(url)
        } catch (error) {
            console.log(error)
        }
    },

    getCharacters: async function (params = null) {
        try {
            return await Request('characters', params)
        } catch (error) {
            console.log(error)
        }
    },

    getCharacterInfo: async function (id) {
        try {
            return await Request('characters/' + id)
        } catch (error) {
            console.log(error)
        }
    },
}
