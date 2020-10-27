import React from 'react'
import { BackgroundHeader } from '../components'
import FilterSection from '../components/FilterSection'
import { Container, StyledShop, StyledFilters, StyledProducts, StyledItemProduct } from '../styles/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

export default function shop() {


    return (
        <>
            <BackgroundHeader />
            <Container>
                <StyledShop>
                    <StyledFilters>
                        <FilterSection />
                    </StyledFilters>
                    <StyledProducts>
                        <StyledItemProduct>
                            <Link to="/">
                                <div className="productImage">
                                    <img src="http://res.cloudinary.com/dgsd8mjgr/image/upload/v1601138442/products/vb1lmjtbsinvaynjvxp3.jpg"
                                        alt="Striped men round neck yellow t-shirt" />
                                </div>
                                <hr />
                                <h6 className="productTitle">
                                    Striped men round neck yellow t-shirt
                                </h6>
                                <div className="priceSide">
                                    <span className="originalProductPrice withOffer">S/50.00 </span>
                                    <span className="discount">20%</span>
                                    <span className="priceOffered">S/40.00 </span>
                                    <button className="btn_cart">{""}<FontAwesomeIcon icon={["fas", "cart-plus"]} /></button>
                                </div>
                            </Link>
                        </StyledItemProduct>
                    </StyledProducts>
                </StyledShop>
            </Container>
        </>
    )
}
