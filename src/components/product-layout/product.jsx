import { Container } from '@mui/material'
import React from 'react'
import { data } from '../../data/data'

export default function Product() {
  return (
    <Container>
        {
          data.pradacts.map((item) => (
            <img src={item.img} alt="" />
          ))
        }
    </Container>
  )
}
