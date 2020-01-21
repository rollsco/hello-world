import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Dialog,
  DialogActions,
  Button,
} from "@material-ui/core";
import { StyledWatchLater } from "../components";

const Row = ({ location, from, until }) => (
  <TableRow>
    <TableCell>
      <Typography variant="body2">{location}</Typography>
    </TableCell>
    <TableCell align="right">
      <Typography variant="body2">{`${from} a ${until}`}</Typography>
    </TableCell>
  </TableRow>
);

const ClosedNotice = ({ scheduleOpen, cartAndActions }) => (
  <Dialog open={scheduleOpen}>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell colSpan={99} align="center">
            <StyledWatchLater />
            <Typography variant="h6">¡Lo sentimos!</Typography>
            <Typography variant="subtitle1">
              En este momento el restaurante está cerrado. Estos son nuestros
              horarios.
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <Row location="Martes a Jueves" from="4:00pm" until="9:30pm" />
        <Row location="Viernes a Domingo" from="12:00m" until="9:30pm" />
      </TableBody>
    </Table>

    <DialogActions>
      <Button variant="contained" onClick={cartAndActions.close}>
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

export default ClosedNotice;
