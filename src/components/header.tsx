/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";

import { useIsMounted } from "../hooks";

export const Header = () => {
  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { disconnect } = useDisconnect();
  const isMounted = useIsMounted();

  return (
    <header className="flex items-center justify-between px-16 pt-7">
      <Link href="/" passHref>
        <img
          className="cursor-pointer w-56"
          src="/logo.svg"
          alt="holograph.xyz"
        />
      </Link>
      {isMounted && (
        <button
          className="button-outlined"
          onClick={isConnected ? () => disconnect() : openConnectModal}
        >
          {isConnected ? "Disconnect" : "Connect"}
        </button>
      )}
    </header>
  );
};

export default Header;
