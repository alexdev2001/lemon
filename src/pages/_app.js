import "@/styles/globals.css";
import Layout from "@/components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <br/>
      <Layout></Layout>
      <Component {...pageProps} />
    </>
  );
}
