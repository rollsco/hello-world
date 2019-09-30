import React, { Fragment } from "react";
import { CartPaper, InputIconBox } from "../components";
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

const Row = ({ Icon, field, name, note, userInfo, handleChange }) => (
  <Fragment>
    <TableRow>
      <TableCell padding="none">
        <InputIconBox>{Icon}</InputIconBox>
      </TableCell>
      <TableCell padding="none">
        <TextField
          fullWidth
          name={name}
          value={userInfo[name]}
          placeholder={field}
          onChange={handleChange}
        />
      </TableCell>
    </TableRow>

    {note && (
      <TableRow>
        <TableCell colSpan={99} align="center">
          <Typography variant="caption" color="textSecondary">
            {note}
          </Typography>
        </TableCell>
      </TableRow>
    )}
  </Fragment>
);

const UserInfo = ({ userInfo, handleChange }) => (
  <CartPaper>
    <Table>
      <TableBody>
        <Row
          userInfo={userInfo}
          handleChange={handleChange}
          name="name"
          Icon={<Person />}
          field="Nombre"
        />
        <Row
          userInfo={userInfo}
          handleChange={handleChange}
          name="address"
          Icon={<Home />}
          field="Dirección"
        />
        <Row
          userInfo={userInfo}
          handleChange={handleChange}
          name="locality"
          Icon={<Explore />}
          field="Barrio, conjunto"
        />
        <Row
          userInfo={userInfo}
          handleChange={handleChange}
          name="email"
          Icon={<Mail />}
          field="Email"
          note="No te enviamos Spam, ni compartimos tu correo con terceros."
        />
        <Row
          userInfo={userInfo}
          handleChange={handleChange}
          name="phone"
          Icon={<Phone />}
          field="Celular"
          note="Te avisamos por WhatsApp el estado de tu órden."
        />
        <Row
          userInfo={userInfo}
          handleChange={handleChange}
          name="notes"
          Icon={<Explore />}
          field="Observaciones"
          note="¿Algo más para que tomemos en cuenta?"
        />
      </TableBody>
    </Table>
  </CartPaper>
);

export default UserInfo;
