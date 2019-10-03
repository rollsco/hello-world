import request from "request";
import { orderTemplate } from "./orderTemplate";

const sendMessage = (text, { onSuccess, onError }) => {
  const method = "sendMessage";

  request(
    {
      uri: `${process.env.REACT_APP_TELEGRAM_BOT_URL}/${method}`,
      qs: {
        chat_id: process.env.REACT_APP_TELEGRAM_GROUP_ID,
        text,
        parse_mode: "Markdown",
      },
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        onError(error, response);
      } else {
        onSuccess(response, body);
      }
    },
  );

  return;
};

const createOrderMessage = order => {
  const { items } = order.cart;
  const total = items.reduce((sum, item) => (sum += item.product.price), 0);

  return orderTemplate(order, items, total);
};

export const telegramBot = {
  sendMessage,
  createOrderMessage,
};
