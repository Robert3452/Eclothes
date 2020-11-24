import React from 'react'
import { Link } from 'gatsby'
import { connect } from 'react-redux';
import { addToCart, addToProdId } from '../actions';
import { StyledProducts, StyledItemProduct } from '../styles/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import priceFormat from '../utils/priceFormat';

function Products({ products, ...props }) {
    const { addToCart, cart, addToProdId } = props
    const addProduct = ({ quantity, ...product }) => {
        const indexFound = cart.findIndex(el => el._id === product._id)
        if (indexFound >= 0)
            addToProdId({ quantity, indexFound })
        else
            addToCart({ quantity, ...product })
    }

    return (
        <StyledProducts>
            {products.map(({ node }, index) => node._id && (
                <StyledItemProduct key={index}>
                    <Link to={`/product/${node._id}`}>
                        <div className="productImage">
                            <img src={node.images[0].url}
                                alt={node.shortDescription} />
                        </div>
                        <h6 className="productTitle">
                            {node.name}
                        </h6>
                        <hr />
                    </Link>
                    <div className="priceSide">
                        <span className="originalProductPrice">{priceFormat(node.variations[0].price)}</span>
                        <button onClick={() => addProduct({ quantity: 1, ...node })} className="btn_cart">{""}<FontAwesomeIcon icon={["fas", "cart-plus"]} /></button>
                    </div>
                </StyledItemProduct>
            ))
            }
        </StyledProducts>
    )
}
const mapDispatchToProps = {
    addToCart,
    addToProdId
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)