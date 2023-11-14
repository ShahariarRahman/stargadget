import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ConfigProvider } from "antd";
import { theme } from "@/lib/antdTheme";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <ConfigProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </SessionProvider>
  );
}
