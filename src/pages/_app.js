import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { theme } from "@/lib/antdTheme";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ConfigProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ConfigProvider>
  );
}
