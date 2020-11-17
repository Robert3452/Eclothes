import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import { BackgroundHeader, DropDownButton } from '../components'
import { StyledProductDetail, StyledDropDownMenu, StyledButton } from '../styles/components'

export default function Product({ pageContext: node }) {
    const [toggle, setToggle] = useState(false)
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        let colors = []
        let sizes = []
        node.variations.map(el => {
            colors = [...colors, el.color.name]
            sizes = [...sizes, el.size]
        })
        setColors([...new Set(colors)])
        setSizes([...new Set(sizes)])
    }, [])


    // const moreThan15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // const lessThan5 = [1, 2, 3, 4]

    const toggleDown = () => setToggle(!toggle)


    return (
        <>
            <BackgroundHeader path="Single" url={`product/${node._id}`} />
            <StyledProductDetail>
                <div className="imageSide">
                    <button className="primaryImage">
                        <img src={node.images[0].url} alt="" />
                    </button>
                    {node.images.map((el, index) => (
                        <button key={index} className="secondaryImages">
                            <img src={el.url} alt={`${node.name} number ${index}`} />
                        </button>
                    ))
                    }
                </div>
                <div className="contentSide">
                    <h3 className="productName">{node.name}</h3>
                    <span className="productPrice">S/. {node.variations[0].price}</span>
                    <p className="productDescription">{node.shortDescription}</p>
                    <div className="wrapperFeatures">
                        <StyledDropDownMenu onClick={toggleDown} >
                            <button >
                                <span>1</span>
                                <FontAwesomeIcon icon={["fas", "chevron-down"]} />
                            </button>
                            <ul className={`${toggle ? 'hide' : ''}`}>
                                <li><button>1</button></li>
                                <li><button>2</button></li>
                                <li><button>3</button></li>
                                <li><button>4</button></li>
                                <li><button>5</button></li>
                            </ul>
                        </StyledDropDownMenu>

                        <DropDownButton dropDownItems={colors} />
                        <DropDownButton dropDownItems={sizes} />
                        <div className="addCart">
                            <StyledButton>
                                Añadir al carrito
                        </StyledButton>

                        </div>

                    </div>
                </div>
            </StyledProductDetail>
        </>
    )
}
