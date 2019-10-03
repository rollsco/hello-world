import styled from "styled-components";
import { Paper, Typography } from "@material-ui/core";

export const OverflowWrapTypography = styled(Typography)`
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    word-break: break-all;
  }

  @-moz-document url-prefix() {
    word-break: normal;
    overflow-wrap: anywhere;
  }
`;

export const BottomButtonPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  && {
    border-radius: 0;
  }
`;
