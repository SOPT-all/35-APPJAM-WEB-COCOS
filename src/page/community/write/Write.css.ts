import { createVar, style } from "@vanilla-extract/css";
import { color, font } from "@style/styles.css.ts";

export const writeWrap = style({
  backgroundColor: color.gray.gray200,
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "3.2rem",
});
