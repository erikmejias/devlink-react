import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SearchBar.module.css";

export function SearchBar({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "search-bar")} tag="div">
      <_Builtin.FormWrapper>
        <_Builtin.FormForm
          className={_utils.cx(_styles, "form-wrapper")}
          name="email-form"
          data-name="Email Form"
          method="get"
          id="email-form"
        >
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
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
