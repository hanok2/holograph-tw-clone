import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";

import { Header } from "../components";
import { useIsMounted } from "../hooks";
import { chains, wagmiClient } from "../utils/web3";

function MyApp({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Head>
          <title>Holograph Protocol</title>
        </Head>
        <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
          <Header />
          <Component {...pageProps} />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
