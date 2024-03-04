import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProductCategoryRow.module.css";

export function ProductCategoryRow({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "category-heading")} tag="div">
      <_Builtin.Heading tag="h4">{"Category"}</_Builtin.Heading>
    </_Component>
  );
}
