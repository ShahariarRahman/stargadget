import Head from "next/head";
import { Layout } from "antd";
import Headers from "../UI/shared/Headers";
import Footer from "../UI/shared/Footer";
import ContainerLayout from "./ContainerLayout";
const { Content } = Layout;

export default function RootLayout({
  children,
  container,
  space,
  title,
  description,
}) {
  return (
    <Layout className="flex flex-col items-center bg-dark/5">
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <Headers />
      <Content className="min-h-screen overflow-hidden w-full">
        <ContainerLayout space={space ? space : "none"} container={container}>
          {children}
        </ContainerLayout>
      </Content>
      <Footer />
    </Layout>
  );
}
