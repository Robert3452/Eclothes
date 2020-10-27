import React, { useState, useEffect } from 'react'
import { StyledHeader, StyledNavBar } from '../styles/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby'

export default function NavBar() {
    const [active, setActive] = useState(false);
    const [yOffset, setYOffset] = useState(true);

    const toggleNav = () => (setActive(!active));

    useEffect(() => {
        window.addEventListener('scroll', () =>
            window.pageYOffset > 0
                ? setYOffset(false)
                : setYOffset(true))
    }, [])

    return (
        <>

            <StyledHeader className={`${yOffset ? 'disable' : 'active'}`}  >

                <div className="btn_container">
                    <button className="nav_btn">
                        <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
                    </button>
                    {/* <button className="nav_btn">
                        <FontAwesomeIcon icon={["fas", "search"]} />
                    </button> */}
                    <button onClick={toggleNav} className="nav_btn">
                        <FontAwesomeIcon icon={["fas", "bars"]} />
                    </button>
                </div>
            </StyledHeader>

            <StyledNavBar style={{ transform: `translateX(${active ? '0' : '-900px'})` }} >
                <button onClick={toggleNav} className="navbar_close">
                    <FontAwesomeIcon icon={["fas", "times"]} />
                </button>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop now</Link></li>
                </ul>
            </StyledNavBar>


        </>
    )
}
