"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Banner.module.css";

export function Banner({
  as: _Component = _Builtin.Link,
  textSpanOverride = "A Webflow template for SaaS startups·",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section", "banner")}
      button={false}
      block="inline"
      options={{
        href: "https://www.bryntaylor.co.uk/platform/webflow?ref=template",
        target: "_blank",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container-large")}
        tag="div"
      >
        <_Builtin.Block tag="div">
          {"A Webflow template for SaaS startups·View all templates"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
