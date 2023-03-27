import React from 'react'
import errorImg from './errorIcon.svg'
import { Container } from './style'
const Error = () => {
  return (
    <Container>
      <img src={errorImg} alt="" />
      <h3>No Definitions Found</h3>
      <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </Container>
  )
}

export default Error
