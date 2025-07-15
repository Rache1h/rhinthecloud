"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Faq.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-95":{"id":"e-95","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"686b63d582bddc7185081dac|ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"686b63d582bddc7185081dac|ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857135401},"e-96":{"id":"e-96","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-95"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"686b63d582bddc7185081dac|ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"686b63d582bddc7185081dac|ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857135401},"e-97":{"id":"e-97","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-98"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ee4ae58f-1cc5-15cd-2792-90620b0aa16a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ee4ae58f-1cc5-15cd-2792-90620b0aa16a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857433558},"e-98":{"id":"e-98","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-97"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ee4ae58f-1cc5-15cd-2792-90620b0aa16a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ee4ae58f-1cc5-15cd-2792-90620b0aa16a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857433559},"e-99":{"id":"e-99","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"54dd60b7-6fa8-ef93-355b-a321568ed0f3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"54dd60b7-6fa8-ef93-355b-a321568ed0f3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857473648},"e-100":{"id":"e-100","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-99"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"54dd60b7-6fa8-ef93-355b-a321568ed0f3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"54dd60b7-6fa8-ef93-355b-a321568ed0f3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857473649},"e-101":{"id":"e-101","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8ab634aa-24ca-0337-fd94-c3fe5e0a7e59","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8ab634aa-24ca-0337-fd94-c3fe5e0a7e59","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857488287},"e-102":{"id":"e-102","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-101"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8ab634aa-24ca-0337-fd94-c3fe5e0a7e59","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8ab634aa-24ca-0337-fd94-c3fe5e0a7e59","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668857488337},"e-103":{"id":"e-103","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668864925395},"e-104":{"id":"e-104","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-103"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ec766c24-12b7-b94d-ff49-9f5d83ef1eb9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1668864925395},"e-105":{"id":"e-105","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-106"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4ba0a19-3c90-69c7-36b8-7f895b683a5d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4ba0a19-3c90-69c7-36b8-7f895b683a5d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1728229513143},"e-106":{"id":"e-106","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-19","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-105"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c4ba0a19-3c90-69c7-36b8-7f895b683a5d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c4ba0a19-3c90-69c7-36b8-7f895b683a5d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1728229513143}},"actionLists":{"a-18":{"id":"a-18","title":"FAQ Accordion [Open]","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".faq-answer","selectorGuids":["feff7332-ce15-a856-fcf4-ee34b4c31d57"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-18-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".faq-answer","selectorGuids":["feff7332-ce15-a856-fcf4-ee34b4c31d57"]},"widthValue":100,"widthUnit":"%","heightUnit":"AUTO","locked":false}},{"id":"a-18-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon","selectorGuids":["4f260e9b-7ec0-7e13-5b62-0f59e5b4ca7c"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1628385361827},"a-19":{"id":"a-19","title":"FAQ Accordion [Close]","actionItemGroups":[{"actionItems":[{"id":"a-19-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".faq-answer","selectorGuids":["feff7332-ce15-a856-fcf4-ee34b4c31d57"]},"widthValue":100,"heightValue":0,"widthUnit":"%","heightUnit":"px","locked":false}},{"id":"a-19-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".faq-icon","selectorGuids":["4f260e9b-7ec0-7e13-5b62-0f59e5b4ca7c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1628385361827}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Faq({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Block
        className={_utils.cx(_styles, "container-small")}
        tag="div"
      >
        <_Builtin.Grid
          className={_utils.cx(_styles, "faq-wrapper")}
          tag="section"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "faq-content")}
            tag="div"
          >
            <_Builtin.Heading tag="h2">
              <_Builtin.Span
                className={_utils.cx(_styles, "text-gradient-overlay")}
              >
                {"FAQs"}
              </_Builtin.Span>
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "spacer-24")}
              tag="div"
            />
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "paragraph", "large")}
            >
              {"Answers to questions you might have about Torch."}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Grid className={_utils.cx(_styles, "faq-list")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "faq-accordion")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-question")}
                data-w-id="ec766c24-12b7-b94d-ff49-9f5d83ef1eb9"
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading", "regular")}
                  tag="h3"
                >
                  {"What does Torch do?"}
                </_Builtin.Heading>
                <_Builtin.Image
                  className={_utils.cx(_styles, "faq-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Plus icon"
                  src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e61_plus.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-answer")}
                tag="div"
              >
                <_Builtin.Paragraph>
                  {
                    "Torch is a data analytics platform that helps businesses track, visualise, and optimise their performance metrics in real-time. It enables teams to make data-driven decisions through customisable dashboards and powerful insights."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-40")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "faq-accordion")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-question")}
                data-w-id="54dd60b7-6fa8-ef93-355b-a321568ed0f3"
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading", "regular")}
                  tag="h3"
                >
                  {"Who is Torch for?"}
                </_Builtin.Heading>
                <_Builtin.Image
                  className={_utils.cx(_styles, "faq-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Plus icon"
                  src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e61_plus.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-answer")}
                tag="div"
              >
                <_Builtin.Paragraph>
                  {
                    "Torch is ideal for startups, tech companies, and growing businesses that want to harness the power of their data. It’s built for teams looking to improve their decision-making by tracking key performance indicators (KPIs) across all departments."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-40")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "faq-accordion")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-question")}
                data-w-id="8ab634aa-24ca-0337-fd94-c3fe5e0a7e59"
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading", "regular")}
                  tag="h3"
                >
                  {"How secure is my data on Torch?"}
                </_Builtin.Heading>
                <_Builtin.Image
                  className={_utils.cx(_styles, "faq-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Plus icon"
                  src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e61_plus.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-answer")}
                tag="div"
              >
                <_Builtin.Paragraph>
                  {
                    "Security is our top priority. Torch uses end-to-end encryption, secure data centres, and regular security audits to ensure your data is protected at all times. We also offer role-based access control to manage permissions within your team."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-40")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "faq-accordion")}
              id={_utils.cx(
                _styles,
                "w-node-c4ba0a19-3c90-69c7-36b8-7f895b683a5c-aec14853"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-question")}
                data-w-id="c4ba0a19-3c90-69c7-36b8-7f895b683a5d"
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading", "regular")}
                  tag="h3"
                >
                  {"Can Torch integrate with existing tools?"}
                </_Builtin.Heading>
                <_Builtin.Image
                  className={_utils.cx(_styles, "faq-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Plus icon"
                  src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e61_plus.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-answer")}
                tag="div"
              >
                <_Builtin.Paragraph>
                  {
                    "Yes, Torch integrates with a wide range of tools, including CRM systems, marketing platforms, and cloud storage services. Our API allows for seamless integration, helping you connect Torch to the software you already use."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-40")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "faq-accordion")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-question")}
                data-w-id="ee4ae58f-1cc5-15cd-2792-90620b0aa16a"
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading", "regular")}
                  tag="h3"
                >
                  {"Is Torch easy to use if you’re not technical?"}
                </_Builtin.Heading>
                <_Builtin.Image
                  className={_utils.cx(_styles, "faq-icon")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Plus icon"
                  src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e61_plus.svg"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "faq-answer")}
                tag="div"
              >
                <_Builtin.Paragraph>
                  {
                    "Absolutely! Torch’s interface is user-friendly and intuitive, designed for both technical and non-technical users. You can create custom reports, dashboards, and visualisations without any coding knowledge."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "spacer-40")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Grid>
      </_Builtin.Block>
    </_Component>
  );
}
