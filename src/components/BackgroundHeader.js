import React from 'react'
import { Logo, StyledNavigator } from '../styles/components';
import { graphql, Link, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components'

export const BackgroundHeader = ({ className, path, url }) => (
    <StaticQuery
        query={graphql`
            query {
                backgroundImg:file(relativePath:{eq:"banner3.jpg"}){
                    childImageSharp{
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            const imageData = data.backgroundImg.childImageSharp.fluid
            return (
                <BackgroundImage
                    className={className}
                    fluid={imageData}
                    backgroundColor={'#040e18'}
                >
                    <Logo>
                        <Link to="/">
                            <span>Downy</span>
                            <p>clothes</p>
                        </Link>
                    </Logo>

                    <StyledNavigator>
                        <li>
                            <Link to="/">
                                Home<i>|</i>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/${url}`}>
                                {path}
                            </Link>
                        </li>
                    </StyledNavigator>

                </BackgroundImage>
            )
        }}
    />
)

const StyledHeaderSection = styled(BackgroundHeader)`
    width: 100%;
    display: block;
    min-height: 250px;
    background-size: cover;
    padding: 20px 30px;
    position: relative;
    background-repeat: no-repeat;
`

export default StyledHeaderSection;