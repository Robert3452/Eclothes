
export const searchImageInNodes = (data /*edges*/, name /* string */) => {

    return data.find(el => el.node.relativePath === name)
}