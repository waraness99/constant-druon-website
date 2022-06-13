import { ColorMode, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  components: {
    Heading: {
      defaultProps: {
        size: "xl",
        letterSpacing: "tight",
        fontWeight: "extrabold",
      },
      baseStyle: ({ colorMode }: { colorMode: ColorMode }) => ({
        fontWeight: "bold",
        color: colorMode === "light" ? "black" : "white",
      }),
    },
    Text: {
      baseStyle: ({ colorMode }: { colorMode: ColorMode }) => ({
        fontSize: "lg",
        color: colorMode === "light" ? "gray.500" : "whiteAlpha.700",
      }),
    },
    Link: {
      baseStyle: ({ colorMode }: { colorMode: ColorMode }) => ({
        color: colorMode === "light" ? "gray.500" : "whiteAlpha.700",
        _hover: {
          color: colorMode === "light" ? "black" : "white",
          textDecoration: "none",
        },
      }),
    },
    Button: {
      defaultProps: {
        colorScheme: "gray",
      },
    },
  },
});

export default theme;
