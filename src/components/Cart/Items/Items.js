import React, { Fragment } from "react";
import Item from "./Item";
import Totals from "./Totals";
import TotalsContainer from "./TotalsContainer";

const Items = ({
  orderAndActions,
  userInfo,
  cartAndActions,
  setVariantIds,
}) => (
  <Fragment>
    {cartAndActions.cart.items.map((item, index) => (
      <Item
        item={item}
        key={index}
        setVariantIds={setVariantIds}
        cartAndActions={cartAndActions}
        orderAndActions={orderAndActions}
      />
    ))}

    <TotalsContainer userInfo={userInfo} cartAndActions={cartAndActions} />
  </Fragment>
);

export default Items;
