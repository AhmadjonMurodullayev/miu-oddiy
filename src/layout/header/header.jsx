import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Sorch from "./components/sorch";
import HeaderButton from "./components/header-button";
import { theme } from "../../config/mui-config";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Container maxWidth="xs">
        <Stack
          py={{ xs: "14px", md: "31px" }}
          direction="row"
          alignItems={"center"}
          gap={{ xs: "33px", md: "61px" }}
        >
          <Sorch />
          <Box display={{ xs: "none", md: "block" }}>
            <HeaderButton />
          </Box>
        </Stack>
      </Container>
      <Box bgcolor={theme.palette.grey.main}>
        <Container sx={{ display: { xs: "none", md: "flex" } }} maxWidth="xs">
          <Stack direction={"row"} justifyContent={"space-between"} width={"100%"} py={"30px"}>
            {data.navbar.map((item) => (
              <Link
                style={{ textDecoration: "none" }}
                to={item.path}
                key={item.id}
              >
                <Typography variant="body1">{item.title}</Typography>
              </Link>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
