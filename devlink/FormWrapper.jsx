import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormWrapper.module.css";

export function FormWrapper({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "form-wrapper")} tag="div">
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "search-input")}
        autoFocus={false}
        maxLength={256}
        name="Search-2"
        data-name="Search 2"
        placeholder="Example Text"
        type="text"
        disabled={false}
        required={true}
        id="Search-2"
      />
      <_Builtin.FormCheckboxWrapper>
        <_Builtin.FormCheckboxInput
          type="checkbox"
          name="checkbox-2"
          data-name="Checkbox 2"
          checked={false}
          required={false}
          id="checkbox-2"
          form={{
            type: "checkbox-input",
            name: "Checkbox 2",
          }}
          inputType="default"
        />
        <_Builtin.FormInlineLabel>
          {"Only show products in stock"}
        </_Builtin.FormInlineLabel>
      </_Builtin.FormCheckboxWrapper>
    </_Component>
  );
}
