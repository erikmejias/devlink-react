import React from "react";
import * as _Builtin from "./_Builtin";
import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";
import * as _utils from "./utils";
import _styles from "./AppWrapper.module.css";

export function AppWrapper({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "app-wrapper")} tag="div">
      <SearchBar />
      <ProductTable />
    </_Component>
  );
}
