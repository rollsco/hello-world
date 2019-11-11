import { createToken } from "../../services/token";

export const initialStateUserInfo = {
  name: "",
  address: "",
  locality: "",
  email: "",
  phone: "",
  notes: "",
  addChopsticks: false,
  addWasabiAndGinger: false,
  addTeriyaki: false,
  addSoy: false,
};

export const requiredUserInfoFields = [
  "name",
  "address",
  "locality",
  "email",
  "phone",
];

export const getInitialStateOrder = () => ({
  status: null,
  errors: null,
  idempotencyToken: createToken(),
});
