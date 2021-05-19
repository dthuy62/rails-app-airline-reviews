import React from 'react'


import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;
  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -8px;
    margin-right: 10px;
  }

  
`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = (props) => {
  const {name, image_url, avg_score} = props.attributes
  const total = props.reviews.length

  return (
    <Wrapper>
      <h1><img src={image_url} alt={name}/>{name}</h1>
      <div>
        <TotalReviews>Có {total} người dùng đã có những đánh giá về hãng hàng không này</TotalReviews>
        <div className="starRating"></div>
        <TotalOf>với số điểm {avg_score} trên 5</TotalOf>
      </div>
    </Wrapper>
      
  )
}
export default Header