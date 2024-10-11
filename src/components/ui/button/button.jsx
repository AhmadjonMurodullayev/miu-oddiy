import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../../config/mui-config";
import { Link } from "react-router-dom";

export const CustomButton = styled(Button)`
  background-color: ${theme.palette.secondary.main};
  color: #fff;
  padding: 12px 20px;
  font-weight: 700;
  display: inline-block;
  text-transform: none;
`;



export const CustomLInkButton = styled(Link)`
  color: ${theme.palette.primary.main};
  text-decoration: underline;
  &:hover {
    color: ${theme.palette.primary[900]};
  }
  
`;
