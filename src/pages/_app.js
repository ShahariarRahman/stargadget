// import { useState, useEffect } from "react";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ConfigProvider } from "antd";
import { theme } from "@/lib/antdTheme";

export default function App({ Component, pageProps }) {
  // * Alt: Prevent flash of unstyled content for first load
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => setMounted(true), []);
  // if (!mounted) {
  //   return;
  // }
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <ConfigProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </SessionProvider>
  );
}
