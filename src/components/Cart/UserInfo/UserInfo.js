import React, { Fragment } from "react";
import { CartPaper, InputIconBox } from "../components";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
  Switch,
} from "@material-ui/core";
import Home from "@material-ui/icons/Home";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import Person from "@material-ui/icons/Person";
import Explore from "@material-ui/icons/Explore";
import ChatBubble from "@material-ui/icons/ChatBubble";

const TextFieldRows = ({ userInfo, handleChange, inputs }) =>
  inputs.map(({ icon, label, name, note }) => (
    <Fragment key={name}>
      <TableRow>
        <TableCell padding="none">
          <InputIconBox>{icon}</InputIconBox>
        </TableCell>
        <TableCell padding="none">
          <TextField
            fullWidth
            name={name}
            value={userInfo[name]}
            placeholder={label}
            onChange={handleChange}
          />
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
  ));

const SwitchRows = ({ userInfo, handleChange, inputs }) =>
  inputs.map(({ label, name }) => (
    <TableRow key={name}>
      <TableCell padding="default">
        <Typography variant="body2">{label}</Typography>
      </TableCell>
      <TableCell padding="none">
        <Switch name={name} checked={userInfo[name]} onChange={handleChange} />
      </TableCell>
    </TableRow>
  ));

const UserInfo = ({ userInfo, handleChange }) => (
  <Fragment>
    <CartPaper>
      <Table>
        <TableBody>
          <TextFieldRows
            userInfo={userInfo}
            handleChange={handleChange}
            inputs={[
              { name: "name", icon: <Person />, label: "Nombre" },
              { name: "address", icon: <Home />, label: "Dirección" },
              {
                name: "locality",
                icon: <Explore />,
                label: "Barrio, conjunto",
              },
              {
                name: "email",
                icon: <Mail />,
                label: "Email",
                note: "No enviamos Spam ni damos tu correo a terceros.",
              },
              {
                name: "phone",
                icon: <Phone />,
                label: "Celular",
                note: "Te avisamos por WhatsApp sobre el estado de tu órden.",
              },
              {
                name: "notes",
                icon: <ChatBubble />,
                label: "Observaciones",
                note: "¿Algo más para que tomemos en cuenta?",
              },
            ]}
          />
        </TableBody>
      </Table>
    </CartPaper>

    <CartPaper>
      <Table>
        <TableBody>
          <SwitchRows
            userInfo={userInfo}
            handleChange={handleChange}
            inputs={[
              { name: "addChopsticks", label: "Enviar Palillos" },
              { name: "addWasabiAndGinger", label: "Enviar Wasabi y Jengibre" },
              { name: "addTeriyaki", label: "Enviar Teriyaki" },
              { name: "addSoy", label: "Enviar Soya" },
            ]}
          />
        </TableBody>
      </Table>
    </CartPaper>
  </Fragment>
);

export default UserInfo;
