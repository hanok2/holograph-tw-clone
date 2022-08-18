/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useConnectModal } from "@rainbow-me/rainbowkit";

import { useIsMounted } from "../hooks";

import { Header } from "../components";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const isMounted = useIsMounted();

  const renderContent = () => {
    if (!isConnected) {
      return (
        <div className="content">
          <img alt="holograph.xyz" className="w-36" src="/alt-logo.png" />
          <h1 className="font-bold text-center text-5xl text-white">
            NFTs without boundaries
          </h1>
          <p className="font-semibold text-center text-2xl text-white">
            Create, mint, & bridge omnichain NFTs
          </p>
          <button className="button-primary" onClick={openConnectModal}>
            Connect Wallet
          </button>
        </div>
      );
    }
    return <h1>AAA</h1>;
  };

  if (!isMounted) return null;

  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
      <Header />
      {renderContent()}
    </div>
  );
};

export default Home;
