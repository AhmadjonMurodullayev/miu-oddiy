import { Box, Container, Stack } from "@mui/material";
import banner from "../../assets/banner.svg";
import React from "react";
import { theme } from "../../config/mui-config";
import styled from "styled-components";
import SecondaryButton from "../ui/secondary-button/secondary-button";
const Title = styled.h1`
    
    font-weight: 700;
    font-size: 60px;
    line-height: 130%;
    text-align: center;
    color: #f9f9f9;
    max-width: 524px;
    margin-bottom: 32px;
`

export default function Banner() {
  return (
    <Box py={"97PX"} bgcolor={theme.palette.primary.main}>
      <Container maxWidth="xs">
        <Stack direction={"row" } justifyContent={"space-between"}>
          <Box>
            <Title>Новая коллекция
            ковров Venetta</Title>
            <SecondaryButton/>
          </Box>
          <Stack direction={"row"} gap={'40PX'}>
            <Box maxWidth={"303px"}>
              <img src={banner} alt="banner" />
            </Box>
            <Box maxWidth={"303px"}>
              <img src={banner} alt="banner" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
