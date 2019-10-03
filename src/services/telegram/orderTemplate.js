import { itemTemplate } from "./itemTemplate";
import { currency } from "../formatter";

export const orderTemplate = (order, items, total) => `
------
ID: **2019-10-01-${parseInt(Math.random() * 10000) + 1000}**
**${order.userInfo.phone}**
**${order.userInfo.name}**
Dir: **${order.userInfo.address}**; **${order.userInfo.locality}**
Obs: **${order.userInfo.notes}**
Email: **${order.userInfo.email}**
Carrito:
${items.map(item => itemTemplate(item))}
Total: \`${currency(total)}\`
`;
