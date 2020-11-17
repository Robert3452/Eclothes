import React from 'react'
import { Link } from 'gatsby'
import { StyledProducts, StyledItemProduct } from '../styles/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Products({ products }) {
    return (

        <StyledProducts>
            {products.map(({ node }, index) => node._id && (
                <StyledItemProduct key={index}>
                    <Link to={`/product/${node._id}`}>
                        <div className="productImage">
                            <img src={node.images[0].url}
                                alt={node.shortDescription} />
                        </div>
                        <hr />
                        <h6 className="productTitle">
                            {node.name}
                        </h6>
                        <div className="priceSide">
                            <span className="originalProductPrice">{node.variations[0].price}</span>
                            <button className="btn_cart">{""}<FontAwesomeIcon icon={["fas", "cart-plus"]} /></button>
                        </div>
                    </Link>
                </StyledItemProduct>
            ))
            }
        </StyledProducts>
    )
}
