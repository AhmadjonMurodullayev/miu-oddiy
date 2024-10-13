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
      <Stack py={"31px"} direction="row" gap={"61px"} alignItems={"center"} >
        <Sorch />
        <HeaderButton />
      </Stack>
    </Container>
    <Box bgcolor={theme.palette.grey.main}>
      <Container maxWidth="xs">
      <Stack direction={"row"} justifyContent={"space-between"} py={"30px"} >
       {
        data.navbar.map((item) => (
        <Link  style={{ textDecoration: "none",  }}  to={item.path} key={item.id}>
           <Typography variant="body1">{item.title}</Typography>
        </Link>
        ))
       }
      </Stack>

      </Container>
    </Box>

</>
  );
}
