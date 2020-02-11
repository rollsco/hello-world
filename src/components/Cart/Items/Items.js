import React, { Fragment } from "react";
import Item from "./Item";
import TotalsContainer from "./TotalsContainer";

const Items = ({ orderAndActions, userInfo, cartAndActions }) => (
  <Fragment>
    {cartAndActions.cart.items.map((item, index) => (
      <Item
        item={item}
        key={index}
        cartAndActions={cartAndActions}
        orderAndActions={orderAndActions}
      />
    ))}

    <TotalsContainer userInfo={userInfo} cartAndActions={cartAndActions} />
  </Fragment>
);

export default Items;
