import styled from "styled-components";
import { Button } from "@mui/material";
import { theme } from "../../../config/mui-config";

export const SecondaryButton = styled(Button)`
    color: #fff;
    background-color: ${theme.palette.secondary.main};
    padding: 13px 38px;
  
    &:hover {
        background-color:${theme.palette.secondary[700]};
    }
`