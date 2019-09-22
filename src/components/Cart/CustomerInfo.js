import React, { Fragment } from "react";
import { CartPaper, InputIconBox } from "./components";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import Person from "@material-ui/icons/Person";
import Explore from "@material-ui/icons/Explore";

const Row = ({ Icon, field, note }) => (
  <Fragment>
    <TableRow>
      <TableCell padding="none">
        <InputIconBox>{Icon}</InputIconBox>
      </TableCell>
      <TableCell padding="none">
        <TextField fullWidth placeholder={field} />
      </TableCell>
    </TableRow>
    {note && (
      <TableRow>
        <TableCell colSpan={99} align="center">
          <Typography variant="caption">{note}</Typography>
        </TableCell>
      </TableRow>
    )}
  </Fragment>
);

const CustomerInfo = () => (
  <CartPaper>
    <Table>
      <TableBody>
        <Row Icon={<Person />} field="Nombre" />
        <Row Icon={<Home />} field="Dirección" />
        <Row Icon={<Explore />} field="Barrio, conjunto" />
        <Row
          Icon={<Mail />}
          field="Email"
          note="No te enviarmos Spam, ni compartiremos tu correo con terceros."
        />
        <Row
          Icon={<Phone />}
          field="Celular"
          note="Te avisaremos por WhatsApp el estado de tu órden."
        />
      </TableBody>
    </Table>
  </CartPaper>
);

export default CustomerInfo;
