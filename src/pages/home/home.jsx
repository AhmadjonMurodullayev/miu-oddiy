import React from 'react'
import Banner from '../../components/banner/banner'
import { Box, Container, Typography, Grid } from '@mui/material' // Import stable Grid
import { data } from '../../data/data'
import { ProductCard } from '../../components/card/product-card'

export default function Home() {
  return (
    <>
      <Banner/>
      <Box pt={"100px"} pb={"100px"}>
        <Container>
          <Typography mb={"29px"} variant="h2">Новинки</Typography>
          <Grid container spacing={4}>
            {
              data.prodact.map((item) => (
                <Grid item xs={12} md={6} lg={3} key={item.id}> 
                  <ProductCard {...item}/>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
      <Box pt={"100px"} pb={"100px"}>
        <Container>
          <Typography mb={"29px"} variant="h2">Скидки</Typography>
          <Grid container spacing={4}>
            {
              data.prodact.map((item) => (
                <Grid item xs={12} md={6} lg={3} key={item.id}> 
                  <ProductCard {...item}/>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </>
  )
}
