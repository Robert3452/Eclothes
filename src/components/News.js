import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { StyledButton, StyledNews, StyledContent }
    from '../styles/components'
import Img from 'gatsby-image';
import { searchImageInNodes } from '../utils/searchInArrays';

export default function News() {

    const data = useStaticQuery(graphql`
        {
            allFile {
            edges {
                node {
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
    const b1 = searchImageInNodes(data.allFile.edges, "b1.jpg")
    const b2 = searchImageInNodes(data.allFile.edges, "b2.jpg")

    return (
        <>
            <StyledNews>
                <StyledContent className="primary_image">
                    <Img fluid={b1.node.childImageSharp.fluid} />
                </StyledContent>
                <StyledContent className="new_content">
                    <h2>Nike DOWNSHIFTER</h2>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus
                    reiciendis maiores alias consequatur.
                    sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore </p>
                    <StyledButton>Shop Now</StyledButton>
                </StyledContent>

                <StyledContent className="secondary_image">
                    <Img  fluid={b2.node.childImageSharp.fluid} />
                </StyledContent>
            </StyledNews>
        </>
    )
}
