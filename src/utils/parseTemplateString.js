export const parseTemplateString = (template, data) => {
    const isValidObject = data && typeof data === 'object' && data !== null

    if (isValidObject) {
        let replacedString = template

        Object.keys(data).forEach((key) => {
            replacedString = replacedString.replace(`{{${key}}}`, data[key])
        })

        return replacedString
    }

    return null
}
