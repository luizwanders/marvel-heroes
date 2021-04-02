import Request from './request'

export const Api = {
    getCharacters: async function (params = null) {
        try {
            return await Request('characters', params)
        } catch (error) {
            console.log(error)
        }
    },
}
