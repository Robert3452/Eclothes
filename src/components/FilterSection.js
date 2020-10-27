import React, { useState } from 'react';
import { ArrowDownButton, StyledSectionFilter, StyledPriceRange, PriceRange, DropDown } from '../styles/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FilterSection = () => {
    const [toggle, setToggle] = useState(false);
    const toggleDropDown = () => setToggle(!toggle)
    return (
        <>
            <StyledSectionFilter>
                <h4 className="filterTitle">Categories</h4>
                <hr />
                <ul>
                    <li><a href="/shop">Zapatillas</a></li>
                    <ul>
                        <li><a href="/shop">Blancas</a></li>
                    </ul>
                    <ul>
                        <li><a href="/shop">Correr</a></li>
                    </ul>
                    <ul>
                        <li><a href="/shop">Deportiva</a></li>
                    </ul>
                </ul>

            </StyledSectionFilter>
            <StyledPriceRange>
                <h4 className="filterTitle">Filtros</h4>
                <ul>
                    <li>
                        <DropDown onClick={toggleDropDown}>
                            <span>Precio</span>
                            <ArrowDownButton>
                                <FontAwesomeIcon icon={["fas", `${toggle ? "angle-up" : "angle-down" }`]} />
                            </ArrowDownButton>
                        </DropDown>
                        <ul style={{ display: `${toggle ? "flex" : "none"}` }}>
                            <li>
                                <PriceRange>
                                    <div className="from">
                                        <span>From</span>
                                        <input min="0" type="number" name="from" />
                                    </div>
                                    <span className="dash">-</span>
                                    <div className="to">
                                        <span>To</span>
                                        <input min="0" type="number" name="from" />
                                    </div>
                                </PriceRange>
                            </li>
                        </ul>
                    </li>
                </ul>
            </StyledPriceRange>

        </>
    );
}

export default FilterSection;
