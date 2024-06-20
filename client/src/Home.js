import React from 'react'
import styled from 'styled-components' 
import Category from './Category'

function Home() {
  return (
    <Container>
        <Banner>
             
        </Banner>

        <Content>
        <Category/>
        </Content>

        </Container>
  )
}

export default Home

const Container=styled.div `
max-width:1500px;
margin:0 auto;
`

const Banner=styled.div`
background-image: url('https://m.media-amazon.com/images/I/71L1h03U77L._SX3000_.jpg');
min-height:600px;
background-postion:center;
background-size:cover;
z-index:1;
mask-image:Linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
`

const Content= styled.div`
background:white;
padding-left:10px;
padding:right:10px;
margin-top:-350px;
display:flex;
`
