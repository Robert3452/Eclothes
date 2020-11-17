import React, { useState, useEffect } from 'react';
import { StyledDropDownMenu } from '../styles/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DropDownButton({ dropDownItems }) {

    const [toggle, setToggle] = useState(true);
    const [currentValue, setCurrentValue] = useState(null);

    const toggleDown = () => setToggle(!toggle)

    useEffect(() => {
        setCurrentValue(dropDownItems[0])
    }, [dropDownItems])

    return (dropDownItems &&
        <StyledDropDownMenu onClick={toggleDown} >
            <button >
                <span>
                    {currentValue}
                </span>
                <FontAwesomeIcon icon={["fas", "chevron-down"]} />
            </button>
            <ul className={`${toggle ? 'hide' : ''}`}>
                {dropDownItems.map(((el, index) => (
                    <li key={index}>
                        <button onClick={() => (setCurrentValue(el))}>
                            {el}
                        </button>
                    </li>
                )))}
            </ul>
        </StyledDropDownMenu>
    )
}
