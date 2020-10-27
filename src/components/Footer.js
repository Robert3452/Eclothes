import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby';
import { StyledFooter } from '../styles/components'



export default function Footer() {
    return (
        <StyledFooter>
            <div className="">
                <h2>Downy Shoes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sint sit vitae inventore tempora nam quae quaerat
                vel illum ea velit doloribus.</p>
                <div className="social_icons">
                    <div className="fb_icon">
                        <Link to="https://www.facebook.com/robert.mezagarcia">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </Link>
                    </div>
                    <div className="twitter_icon">
                        <a href="https://twitter.com/romeza1239">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                        </a>
                    </div>
                    <div className="instagram_icon">
                        <a href="https://www.instagram.com/rojarodmeza">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="">
                <h3><strong>Our</strong> Information</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop now</Link></li>
                </ul>
            </div>
            <div className="">
                <h3><strong>Store</strong> Information</h3>
                <ul>
                    <li>
                        <div className="icon_contact" >
                            <FontAwesomeIcon icon={['fas', 'phone']} />
                        </div>
                        <div className="text_contact" >
                            <h6>Phone Number</h6>
                            <span>+51 935 993 138</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon_contact" >
                            <FontAwesomeIcon icon={['fas', 'envelope']} />
                        </div>
                        <div className="text_contact" >
                            <h6>Email Address</h6>
                            <span>Email: <a href = "mailto: romeza1239@gmail.com">romeza1239@gmail.com</a> </span>
                        </div>
                    </li>
                    <li>
                        <div className="icon_contact" >
                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                        </div>
                        <div className="text_contact" >
                            <h6>Location</h6>
                            <span>Broome St, NY 10002,California, USA.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </StyledFooter>
    )
}
