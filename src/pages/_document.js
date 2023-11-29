import Document, { Html, Head, Main, NextScript } from "next/document";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";

export class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createCache();

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          );
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: extractStyle(cache) }} />
      </>
    ),
  };
};

export default MyDocument;
