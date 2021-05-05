import { extendTheme } from "@chakra-ui/react";

const extendedTheme = extendTheme({
  components: {
    Container: {
      baseStyle: {
        maxW: "1264px",
      },
    },
    Checkbox: {
      sizes: {
        lg: {
          control: { w: "5.5", h: 5.5 },
          label: { fontSize: "14px" },
          icon: { fontSize: "0.625rem" },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "Open Sans, sans-serif",
        fontStyle: "normal",
        backgroundColor: "#FAFAFA",
        color: "mono.black",
        outlineColor: "cyan.500",
      },
      div: { outline: "unset" },
      span: { boxShadow: "none" },
    },
  },
  shadows: {
    md: "0px 6px 24px rgba(93, 62, 188, 0.04)",
    outline: "none",
  },
  sizes: {
    "5.5": "1.375rem",
  },
  colors: {
    cyan: {
      500: "#1EA4CE",
      700: "#147594",
    },
    gray: {
      200: "#F3F0FE",
      300: "#C4C4C4",
      500: "#697488",
      600: "#525252",
      700: "#191919",
    },
  },
});

export const theme = {
  ...extendedTheme,
};
