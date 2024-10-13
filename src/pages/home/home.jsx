import React from 'react'
import Banner from '../../components/banner/banner'
import { Box, Container, Grid2, Typography } from '@mui/material'
import { data } from '../../data/data'
import { ProductCard } from '../../components/card/product-card'

export default function Home() {
  return (
    <>
        <Banner/>
        <Box pt={"100px"} pb={"100px"}>
            <Container maxWidth="xs">
                <Typography mb={"29px"} variant="h2">Новинки</Typography>
                <Grid2 container spacing={"40px"} >
                 {
                    data.prodact.map((item) => (
                        <Grid2 size={3} key={item.id}>
                            <ProductCard {...item}/>
                        </Grid2>
                    ))
                 }
                </Grid2>
            </Container>
        </Box>
        <Box pt={"100px"} pb={"100px"}>
            <Container maxWidth="xs">
                <Typography mb={"29px"} variant="h2">Скидки</Typography>
                <Grid2 container spacing={"40px"} >
                 {
                    data.prodact.map((item) => (
                        <Grid2 size={3} key={item.id}>
                            <ProductCard {...item}/>
                        </Grid2>
                    ))
                 }
                </Grid2>
            </Container>
        </Box>
    </>
  )
}
