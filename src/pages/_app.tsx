import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "@/containers/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
