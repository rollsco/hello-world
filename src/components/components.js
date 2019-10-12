import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const OverflowWrapTypography = styled(Typography)`
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    word-break: break-all;
  }

  @-moz-document url-prefix() {
    word-break: normal;
    overflow-wrap: anywhere;
  }
`;
