"use client";

import React from "react";

import * as S from "./typography.styles";

interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body-text-bold"
    | "body-text-normal"
    | "body-text-small-bold"
    | "body-text-small-normal"
    | "caption-normal"
    | "caption-small";
  color?: string;
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  className?: string;
  transform?: "uppercase" | "lowercase" | "capitalize" | "none";
  align?: "left" | "right" | "center";
  style?: "normal" | "italic" | "oblique";
  textDecoration?: "none" | "underline";
  fontSize?: string;
  lineHeight?: string;
}

export default function Typography({
  variant = "body-text-normal",
  color,
  children,
  padding,
  margin,
  className,
  transform = "none",
  align = "left",
  style = "normal",
  textDecoration = "none",
  fontSize = "none",
  lineHeight,
}: Readonly<TypographyProps>) {
  let Component;
  switch (variant) {
    case "h1":
      Component = S.H1;
      break;
    case "h2":
      Component = S.H2;
      break;
    case "h3":
      Component = S.H3;
      break;
    case "h4":
      Component = S.H4;
      break;
    case "h5":
      Component = S.H5;
      break;
    case "body-text-bold":
    case "body-text-normal":
    case "body-text-small-bold":
    case "body-text-small-normal":
    case "caption-normal":
    case "caption-small":
      Component = S.P;
      break;
    default:
      Component = S.P;
  }
  return (
    <Component
      className={className}
      $color={color}
      $margin={margin}
      $padding={padding}
      $transform={transform}
      $align={align}
      $style={style}
      $textDecoration={textDecoration}
      $fontSize={fontSize}
      $lineHeight={lineHeight}
    >
      {children}
    </Component>
  );
}
