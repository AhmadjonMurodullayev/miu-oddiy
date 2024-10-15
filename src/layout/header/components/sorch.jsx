import React from "react";
import logo from "../../../assets/logo.svg";
import mobil from "../../../assets/mobilelogo.svg";
import { Box, Drawer, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { LogoLink } from "./style";
import Location from "../../../assets/icons/location-icon";
import SorchInputs from "../../../components/ui/sorch-input/sorch-input";
import { MobileSearchInput } from "../../../components/ui/sorch-input/mobile-sorch";
import Burgers from "../../../assets/icons/burgers";
import { data } from "../../../data/data";
import { useToggle } from "../../../assets/hooks/hooks";
import { Link } from "react-router-dom";
import UserIcon from "../../../assets/icons/user-icon";
import LikeIcon from "../../../assets/icons/like-icon";
import KorzinkaIcon from "../../../assets/icons/korzinka-icon";
export default function Sorch() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { close, isOpen, open } = useToggle();
  const changeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Stack
      direction={"row"}
      gap={isMobile ? "20px" : "60px"}
      alignItems={"center"}
      flexGrow={1}
    >
      <Stack gap={"16px"} alignItems={"center"} direction={"row"}>
        <IconButton
          onClick={open}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Burgers />
        </IconButton>
        <LogoLink sx={{ alignItems: "center" }} to={"/"}>
          <img src={isMobile ? mobil : logo} alt="logo" />
        </LogoLink>
      </Stack>

      {!isMobile && (
        <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
          <IconButton>
            <Location />
          </IconButton>
          <Typography variant="body1">Алматы</Typography>
        </Stack>
      )}

      <Stack flexGrow={1}>
        {isMobile ? <MobileSearchInput /> : <SorchInputs />}
      </Stack>
      <Drawer open={isOpen} onClose={close} anchor="left">
        <Box bgcolor={"white"} p="30px" height="100vh" width={"300px"}>
          <Stack mb={"20px"} gap={"20px"}>
          {
               data.navbar.map((item) => (
                <Link  style={{ textDecoration: "none",  }}  to={item.path} key={item.id}>
                   <Typography variant="body1">{item.title}</Typography>
                </Link>
                ))
          }
          </Stack>
          <Box>
            <IconButton>
            <UserIcon/>
            </IconButton>
            <IconButton>
            <LikeIcon/>
            </IconButton>
            <IconButton>
            <KorzinkaIcon/>
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Stack>
  );
}
