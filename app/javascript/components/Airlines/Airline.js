import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`
const AirlineLogo = styled.div`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  

  img {
    height: 65px;
    width: 65px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`

const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`

const AirlineScore = styled.div`
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`
const Airline = (props) => {
  return (
    <Card>
      <AirlineLogo>
        <img src={props.attributes.image_url} alt={props.attributes.image_url}/>
      </AirlineLogo>
      <AirlineName>{props.attributes.name}</AirlineName>
      <AirlineScore>{props.attributes.avg_score}</AirlineScore>
      <LinkWrapper>
        <Link to = { `/airlines/${ props.attributes.slug }` }>Chi tiet</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Airline