import request from "request";

const sendMessage = (text, { onSuccess, onError }) => {
  const method = "sendMessage";

  request(
    {
      uri: `${process.env.REACT_APP_TELEGRAM_BOT_URL}/${method}`,
      qs: {
        chat_id: "10370735",
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

export const telegramBot = {
  sendMessage,
};
