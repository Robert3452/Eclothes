import React from 'react'
import { BackgroundHeader, Products, FilterSection } from '../components'
import {
    Container,
    StyledShop
} from '../styles/components'
import { graphql } from 'gatsby'


export const query = graphql`
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
`

export default function shop({ data }) {
    let prods = data.allInternalproducts.edges;
    return (
        <>
            <BackgroundHeader path="Shop" url="shop" />
            <Container>
                <StyledShop>
                    <FilterSection />
                    <Products products={prods} />
                </StyledShop>
            </Container>
        </>
    )
}
