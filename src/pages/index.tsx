/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { COLLECTIONS } from "../utils/constants";
import CollectionCard from "../components/collection-card";

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  if (!isConnected) {
    return (
      <div className="public-content">
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

  return (
    <main className="flex flex-col items-center justify-center mt-16 min-h-[75vh] w-full">
      <header className="flex items-center justify-between mb-12 px-16 pt-7 w-full">
        <p className="font-medium text-5xl text-white">Collections</p>
        <button className="button-secondary">New Collection</button>
      </header>
      <div className="flex flex-col gap-7 mb-20">
        {COLLECTIONS.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </main>
  );
};

export default Home;
