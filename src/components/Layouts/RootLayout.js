import { Layout } from "antd";
import Headers from "../UI/shared/Headers";
import Footer from "../UI/shared/Footer";
const { Content } = Layout;

export default function RootLayout({ children }) {
  return (
    <Layout className="flex flex-col items-center bg-gray-100">
      <Headers />
      <Content className="min-h-screen overflow-hidden w-full bg-white">
        {children}
      </Content>
      <Footer />
    </Layout>
  );
}
