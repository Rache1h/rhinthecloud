"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Benefits.module.css";

export function Benefits({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-large")}
        tag="div"
        id="learn-more"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading", "large")}
          tag="h2"
        >
          <_Builtin.Span
            className={_utils.cx(_styles, "text-gradient-overlay")}
          >
            {"Take action from insights"}
          </_Builtin.Span>
        </_Builtin.Heading>
        <_Builtin.Block className={_utils.cx(_styles, "spacer-80")} tag="div" />
        <_Builtin.Grid className={_utils.cx(_styles, "card-list")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "card-item")}
            id={_utils.cx(
              _styles,
              "w-node-_38f718e7-ef7d-cf1b-5d32-9110617504c1-617504ba"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "icon-large")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Dashboard icon"
              src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e5f_layout-dashboard.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-128")}
              tag="div"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "medium")}
              tag="h3"
            >
              {"Easy-to-use dashboards"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-16")}
              tag="div"
            />
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
              {
                "Create intuitive, custom dashboards to visualise your most important metrics. No coding or technical skills required."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "card-item")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "icon-large")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Radar icon"
              src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e55_radar.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-32")}
              tag="div"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "medium")}
              tag="h3"
            >
              {"Real-time data updates"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-16")}
              tag="div"
            />
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
              {
                "Get the latest insights with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "card-item")}
            id={_utils.cx(
              _styles,
              "w-node-d05e47e2-aa32-2547-947a-66fd2ccb7be0-617504ba"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "icon-large")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Magic icon"
              src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e5e_wand-sparkles.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-128")}
              tag="div"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "medium")}
              tag="h3"
            >
              {"Automated reports"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-16")}
              tag="div"
            />
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
              {
                "Set up automated reports to be delivered directly to your inbox. Save time and focus on making decisions, not creating reports."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "card-item")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "icon-large")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="Mouse icon"
              src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e57_mouse-pointer-click.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-32")}
              tag="div"
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading", "medium")}
              tag="h3"
            >
              {"Collaborative analytics"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-16")}
              tag="div"
            />
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph")}>
              {
                "Share dashboards and reports with your team for seamless collaboration. Comment, edit, and review data insights together."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
