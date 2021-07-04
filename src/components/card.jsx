import React from "react"
import styled from "@emotion/styled"

const Card = styled.div`
  width: 400px;
  border-radius: 25px;
  background: #F1F1F1;
  padding: 1rem;
  color: black;
  margin-right: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "title title"
    "description image"
    "tech tech"
`

const Title = styled.h3`
  text-align: center;
  grid-area: title
`

const Description = styled.p`
  grid-area: description;
`

const CardComponent = ({ title, description, image, imageAlt, technologies }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default CardComponent

