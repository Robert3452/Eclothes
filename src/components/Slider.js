import React, { useEffect, useState } from 'react'
import { StyledSliderContainer, PrevButton, NextButton, Logo, SliderImages, StyledDots } from '../styles/components'
import { graphql, useStaticQuery, Link } from 'gatsby';
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
    banner.push({ fluid: searchImageInNodes(data.allFile.edges, "banner1.jpg"), title: "Sneakers", detail: "See how good they feel." });
    banner.push({ fluid: searchImageInNodes(data.allFile.edges, "banner2.jpg"), title: "Adidas", detail: "For all walks of life." });
    banner.push({ fluid: searchImageInNodes(data.allFile.edges, "banner3.jpg"), title: "Nike", detail: "See how good they feel." });
    banner.push({ fluid: searchImageInNodes(data.allFile.edges, "banner4.jpg"), title: "Heels", detail: "For all walks of life." });

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
                <Logo>
                    <Link to="/">
                        <span>Downy</span>
                        <p>clothes</p>
                    </Link>
                </Logo>
                <SliderImages>
                    {banner.map((el, index) =>
                        (<div
                            key={index}
                            style={{ display: `${index === currentSlide ? 'flex' : 'none'}` }}
                            className="slider_item">
                            <Img fluid={el.fluid.node.childImageSharp.fluid} />
                            <div className="content_item">
                                <h2>{el.title}</h2>
                                <span> {el.detail}</span>
                            </div>
                        </div>)
                    )}
                </SliderImages>
                <StyledDots>
                    <div style={{ minWidth: `${banner.length > 3 ? '120px' : '80px'}` }}>
                        {banner.map((_el, index) => (
                            <button
                                onClick={() => { selectSlide(index) }}
                                key={index}
                                className={`${index === currentSlide ? 'current' : ''}`}>{''}</button>
                        ))}
                    </div>
                </StyledDots>
                <PrevButton onClick={() => { plusSlide(-1) }} className="prev"><span>&#8249;</span></PrevButton>
                <NextButton onClick={() => { plusSlide(1) }} className="next"><span>&#8250;</span></NextButton>
            </StyledSliderContainer>
        </>
    )
}
