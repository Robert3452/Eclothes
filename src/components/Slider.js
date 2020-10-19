import React, { useEffect, useState } from 'react'
import { StyledSliderContainer, PrevButton, NextButton, SliderImages, StyledDots } from '../styles/components'
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const [numbSlides, setNumbSlides] = useState(0);
    var banner = [];
    banner.push(searchImageInNodes(data.allFile.edges, "banner1.jpg"));
    banner.push(searchImageInNodes(data.allFile.edges, "banner2.jpg"));
    banner.push(searchImageInNodes(data.allFile.edges, "banner3.jpg"));

    const selectSlide = (number) => setCurrentSlide(number)

    const plusSlide = (number) => {
        if (currentSlide + number > numbSlides)
            return setCurrentSlide(0)
        if (currentSlide + number < 0)
            return setCurrentSlide(numbSlides)
        return setCurrentSlide(number + currentSlide)
    }
    useEffect(() => {
        const sliders = document.querySelectorAll('.slider_item');
        setNumbSlides(sliders.length - 1);
        setCurrentSlide(0)
    }, [])

    return (
        <>
            <StyledSliderContainer>
                <SliderImages>
                    {banner.map((el, index) =>
                        (<div
                            key={index}
                            style={{ display: `${index === currentSlide ? 'flex' : 'none'}` }}
                            className="slider_item">
                            <Img fluid={el.node.childImageSharp.fluid} />
                            <div className="content_item">
                                <h2>Sneakers</h2>
                                <span>See how good they feel</span>
                            </div>
                        </div>)
                    )}
                </SliderImages>
                <StyledDots>
                    <div style={{ minWidth: `${banner.length > 3 ? '120px' : '80px'}` }}>
                        {banner.map((_el, index) => (
                            <a
                                onClick={() => { selectSlide(index) }}
                                key={index}
                                className={`${index === currentSlide ? 'current' : ''}`}>{''}</a>
                        ))}
                    </div>
                </StyledDots>


                <PrevButton onClick={() => { plusSlide(-1) }} className="prev"><span>&#8249;</span></PrevButton>
                <NextButton onClick={() => { plusSlide(1) }} className="next"><span>&#8250;</span></NextButton>
            </StyledSliderContainer>
        </>
    )
}
