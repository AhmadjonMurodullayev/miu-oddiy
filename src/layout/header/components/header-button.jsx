import { IconButton, Stack } from "@mui/material";
import React from "react";
import UserIcon from "../../../assets/icons/user-icon";
import LikeIcon from "../../../assets/icons/like-icon";
import KorzinkaIcon from "../../../assets/icons/korzinka-icon";
import styled from "styled-components";
import { theme } from "../../../config/mui-config";

export default function HeaderButton() {
  const CustomIcons = styled(IconButton)`
    color: #1d1d1d;
    &:hover {
      color: ${theme.palette.primary.main};
    }
  `;
  return (
    <>
      <Stack direction={"row"} gap={"20px"}>
        <CustomIcons>
          <UserIcon />
        </CustomIcons>
        <CustomIcons>
          <LikeIcon />
        </CustomIcons>
        <CustomIcons>
          <KorzinkaIcon />
        </CustomIcons>
      </Stack>
    </>
  );
}
