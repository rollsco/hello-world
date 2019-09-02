import { jsonApiDeserialize } from "./deserializer/deserializer";
const rollsApiUrl = `http://${process.env.REACT_APP_API_ROUTE}`;

export const rollsApiGet = async (endpoint, params, options) => {
  const route = `${rollsApiUrl}/${endpoint}`;

  const response = await fetch(route);
  const deserializedResponse = await jsonApiDeserialize(response);

  return deserializedResponse;
};
