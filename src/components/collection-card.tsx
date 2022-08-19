/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";

import { NETWORK_ICONS } from "../utils/constants";
import { CollectionCardProps } from "../utils/types";

const CollectionCard = ({
  collection: { id, name, nfts, symbol },
}: CollectionCardProps) => {
  const router = useRouter();
  const [isMinted, setIsMinted] = useState(false);

  const handleMintButtonClick = () => {
    setIsMinted(true);
  };

  const handleViewNftsButtonClick = () => {
    router.push(`/collections/${id}`);
  };

  return (
    <div className="bg-black-opaque w-[60vw] max-w-[900px] rounded-md p-10">
      <strong className="font-semibold text-white text-3xl">{name}</strong>
      <div className="bg-teal-500 h-[2px] mt-[6px] w-full" />
      <section className="flex justify-between mt-4 mb-8">
        <div>
          <p className="font-medium mb-1 text-gray-500 text-base">Symbol</p>
          <p className="font-semibold text-white text-2xl">{symbol}</p>
        </div>
        <div>
          <p className="font-medium mb-1 text-gray-500 text-base">NFTs</p>
          <p className="font-semibold text-white text-2xl">{nfts.length}</p>
        </div>
        <div>
          <p className="font-medium mb-1 text-gray-500 text-base">Networks</p>
          <div className="flex gap-2">
            {NETWORK_ICONS.map(({ alt, src }, index) => (
              <img
                alt={alt}
                className={!!index ? "w-6" : "w-4"}
                key={src}
                src={src}
              />
            ))}
          </div>
        </div>
        <div />
      </section>
      <div className="flex items-center gap-4">
        <button
          className="button-outlined-half"
          onClick={handleViewNftsButtonClick}
        >
          View NFTs
        </button>
        <button
          className="button-primary-half"
          disabled={isMinted}
          onClick={handleMintButtonClick}
        >
          {isMinted ? "Minted" : "Mint"}
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
