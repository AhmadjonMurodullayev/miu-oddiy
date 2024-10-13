import React from "react";
import logo from "../../../assets/logo.svg";
import { IconButton, Stack, Typography } from "@mui/material";
import { LogoLink } from "./style";
import Location from "../../../assets/icons/location-icon";
import SorchInputs from "../../../components/ui/sorch-input/sorch-input";
export default function Sorch() {
  return (
    <Stack direction={"row"} gap={"60px"} alignItems={"center"} flexGrow={1}>
      <LogoLink to={"/"}>
        <img src={logo} alt="logo" />
      </LogoLink>
      <Stack direction={"row"} gap={"8px"} alignItems={"center"}>
        <IconButton>
          <Location />
        </IconButton>
        <Typography variant="body1">Алматы</Typography>
      </Stack>
      <Stack flexGrow={1}>
        <SorchInputs />
      </Stack>
    </Stack>
  );
}
