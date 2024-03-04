import React from "react";
import * as _Builtin from "./_Builtin";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import * as _utils from "./utils";
import _styles from "./ProductTable.module.css";

export function ProductTable({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "product-table")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "product-headings")}
        tag="div"
      >
        <_Builtin.Heading tag="h4">{"Name"}</_Builtin.Heading>
        <_Builtin.Heading tag="h4">{"Price"}</_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "category-component")}
        tag="div"
      >
        <ProductCategoryRow />
        <ProductRow />
      </_Builtin.Block>
    </_Component>
  );
}
