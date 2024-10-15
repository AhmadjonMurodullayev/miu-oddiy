import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import banner from "../../assets/banner.svg";
import React from "react";
import { theme } from "../../config/mui-config";
import styled from "styled-components";
import { SecondaryButton } from "../ui/secondary-button/secondary-button";

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 130%;
  text-align: center;
  color: #f9f9f9;
  max-width: 524px;
  margin-bottom: 32px;
    @media (max-width: 768px) {
      font-size: 40px;
    }
`;

export default function Banner() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box py={"97px"} bgcolor={theme.palette.primary.main}>
      <Container maxWidth="xs">
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 4 : 0}
          sx={{ md: { display: "flex", justifyContent: "space-between", justifyItems: "center"} }}
        >
          <Box textAlign={isMobile ? "center" : "left"}>
            <Title>Новая коллекция ковров Venetta</Title>
            <SecondaryButton>Смотреть все</SecondaryButton>
          </Box>

          <Stack
            direction={isMobile ? "column" : "row"}
            gap={isMobile ? 0 : "40px"}
            justifyContent="center"
            margin={isMobile ? "0 auto" : ""}
          >
            <Box maxWidth={"303px"}>
              <img src={banner} alt="banner" />
            </Box>
            {!isMobile && (
              <Box maxWidth={"303px"}>
                <img src={banner} alt="banner" />
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
