import { createToken } from "../../services/token";

export const initialStateUserInfo = {
  name: "",
  address: "",
  locality: "",
  email: "",
  phone: "",
  notes: "",
  addChopsticks: true,
  addWasabi: true,
  addSoy: true,
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
