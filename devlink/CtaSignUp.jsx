"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CtaSignUp.module.css";

export function CtaSignUp({
  as: _Component = _Builtin.Block,
  paragraphText = "Take the first step to growing your business",
  headingText = "Ready to get started?",
  buttonText = "Get started",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "is-relative")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cta-card-content")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "text-box")} tag="div">
          <_Builtin.Block tag="div">
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "extra-large")}
              tag="h2"
            >
              {headingText}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "spacer-16")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "paragraph", "extra-large")}
            tag="div"
          >
            {paragraphText}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "spacer-32")} tag="div" />
        <_Builtin.Link
          className={_utils.cx(_styles, "button")}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {buttonText}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "gradient-image")}
        tag="div"
      />
    </_Component>
  );
}
