import { style } from "@vanilla-extract/css";
import { font, semanticColor } from "@style/styles.css";

export const commentContainer = style([
  {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "33.5rem",
    padding: "0.8rem 0rem",
    gap: "0.4rem",
  },
]);

export const pStyle = style({
  padding: "0rem, 1.1rem, 0rem, 4rem",
});

export const containerOptionsIcon = style([
  {
    position: "absolute",
    left: "31.1rem",
    top: "0.8rem",
  },
]);

export const commentItem = style([
  {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.4rem",
  },
]);

export const contentContainer = style([
  {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
]);

export const header = style([
  {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  },
]);

export const headerInfo = style([
  {
    display: "flex",
    flexDirection: "column",
  },
]);

export const nickname = style([
  font.label01,
  {
    fontWeight: 600,
    color: semanticColor.text.assistive,
    letterSpacing: "-0.024rem",
  },
]);

export const meta = style([
  font.label01,
  {
    color: semanticColor.text.assistive,
    fontWeight: 500,
    letterSpacing: "-0.024rem",
  },
]);

export const text = style([
  font.heading03,
  {
    color: semanticColor.text.normal,
    fontWeight: "500",
    lineHeight: "2.24rem",
    letterSpacing: "-0.16rem",
    padding: "0rem 1.1rem 0rem 4rem",
  },
]);

export const replyContainer = style([
  {
    display: "flex",
    alignItems: "center",
    padding: "0rem 1.1rem 0rem 4rem",
  },
]);

export const replyText = style([
  font.label01,
  {
    color: semanticColor.text.assistiveLight,
  },
]);

export const icon = style([
  {
    gap: "0.4rem",
  },
]);
