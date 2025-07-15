"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Nav.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-37":{"id":"e-37","name":"","animationType":"preset","eventTypeId":"NAVBAR_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-591"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644},"e-38":{"id":"e-38","name":"","animationType":"preset","eventTypeId":"NAVBAR_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-394"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"abad23f6-3206-d95e-518e-2548f4c46996","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1626169409644}},"actionLists":{"a-9":{"id":"a-9","title":"Nav [Open]","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"yValue":0.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-9-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"yValue":-0.1875,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-9-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-9-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626225663494},"a-10":{"id":"a-10","title":"Nav [Close]","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-10-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-10-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-bottom","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d6"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-10-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inOutQuint","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".menu-icon-line-top","selectorGuids":["a91e03ed-1e05-05b4-6b23-4f1d9094b5d8"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626226496146}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Nav({
  as: _Component = _Builtin.NavbarWrapper,
  navLinkText = "Features",
  imageImage = "",
  actions = true,
  secondaryAction = true,
  primaryAction = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "nav")}
      data-w-id="abad23f6-3206-d95e-518e-2548f4c46996"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      fs-scrolldisable-element="smart-nav"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "nav-container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "logo-wrapper")}
          tag="div"
        >
          <_Builtin.NavbarBrand
            className={_utils.cx(_styles, "logo")}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              loading="lazy"
              width="Auto"
              height="24"
              alt="Logo"
              src="https://cdn.prod.website-files.com/686b63d582bddc7185081d6b/686b63d582bddc7185081e65_torch-logo.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu")}
            id={_utils.cx(
              _styles,
              "w-node-abad23f6-3206-d95e-518e-2548f4c4699b-f4c46996"
            )}
            tag="nav"
            role="navigation"
          >
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
            >
              {"Features"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
            >
              {"Pricing"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
            >
              {"About"}
            </_Builtin.NavbarLink>
            <_Builtin.NavbarLink
              className={_utils.cx(_styles, "nav-link")}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.NavbarLink>
          </_Builtin.NavbarMenu>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "actions-wrapper")}
          id={_utils.cx(
            _styles,
            "w-node-abad23f6-3206-d95e-518e-2548f4c469b0-f4c46996"
          )}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "button-secondary",
              "small",
              "hide-mobile-portrait"
            )}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Sign in"}
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "button",
              "small",
              "hide-mobile-portrait"
            )}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Get started"}
          </_Builtin.Link>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "nav-menu-button")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "menu-icon")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon-line-top")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "menu-icon-line-bottom")}
                tag="div"
              />
            </_Builtin.Block>
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
