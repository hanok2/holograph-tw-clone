/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";

import { NETWORK_ICONS } from "../utils/constants";
import { getRandomNumber } from "../utils/helpers";
import { NFTCardProps } from "../utils/types";

const NFTCard = ({ nft: { name, awsUrl } }: NFTCardProps) => {
  const [isMinted, setIsMinted] = useState(false);

  const randomNumber = useMemo(() => getRandomNumber(), []);

  const handleMintButtonClick = () => {
    setIsMinted(true);
  };

  return (
    <div className="bg-black-opaque w-[320px] rounded-md pb-6">
      <img alt={name} src={awsUrl} />
      <div className="flex flex-col gap-4 mt-4 px-4">
        <div>
          <p className="font-medium mb-1 text-gray-500 text-base">Name</p>
          <p className="font-semibold text-white text-2xl">{name}</p>
        </div>
        <div className="mb-2">
          <p className="font-medium mb-1 text-gray-500 text-base">Network</p>
          <img
            alt={NETWORK_ICONS?.[randomNumber]?.alt}
            className={!!randomNumber ? "w-6" : "w-4"}
            src={NETWORK_ICONS?.[randomNumber]?.src}
          />
        </div>
        <button
          className="button-primary-full"
          disabled={isMinted}
          onClick={handleMintButtonClick}
        >
          {isMinted ? "Minted" : "Mint"}
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
