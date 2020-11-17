const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const productTemplate = path.resolve(`src/templates/Product.js`);

    const result = await graphql(`
        query{
            allInternalproducts{
            edges{
                node{
                _id
                name
                shortDescription
                variations{
                    _id
                    size
                    stock
                    price
                    color{
                        _id
                        name
                        colorCode
                    }
                }
                images{
                    url
                    alternative_id
                    _id
                }
                }
            }
        }
    }

    `)
    if (result.errors)
        throw result.errors

    let prods = result.data.allInternalproducts.edges;
    prods.splice(-1, 1)
    prods.forEach(({ node }) => {
        createPage({
            path: `/product/${node._id}`,
            component: productTemplate,
            context: node
        })
    })

}