import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { SimplePage } from "src/components/Layout/SimplePage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SimplePage>
        <Component {...pageProps} />
      </SimplePage>
    </ChakraProvider>
  );
}

export default MyApp;
