import React from 'react'
import { StyledSliderContainer, PrevButton, NextButton, SliderImages } from '../styles/components'
import { graphql, useStaticQuery } from 'gatsby';
import { searchImageInNodes } from '../utils/searchInArrays';
import Img from 'gatsby-image';

export default function Slider() {

    const data = useStaticQuery(graphql`
        query{
            allFile{
            edges{
                node{
                relativePath
                childImageSharp{
                    fluid{
                    ...GatsbyImageSharpFluid

                    }
                }
                }
            }
            }
        }
    `)

    let banner = [];
    banner.push(searchImageInNodes(data.allFile.edges, "banner1.jpg"));
    banner.push(searchImageInNodes(data.allFile.edges, "banner2.jpg"));
    banner.push(searchImageInNodes(data.allFile.edges, "banner3.jpg"));

    console.log(banner)

    return (
        <>
            <StyledSliderContainer>
                <SliderImages>
                    {banner.map((el, index) => (<div>
                        <Img key={index} fluid={el.node.childImageSharp.fluid} />
                    </div>))}
                </SliderImages>

                <PrevButton className="prev"><span>&#8249;</span></PrevButton>
                <NextButton className="next"><span>&#8250;</span></NextButton>
            </StyledSliderContainer>
        </>
    )
}
