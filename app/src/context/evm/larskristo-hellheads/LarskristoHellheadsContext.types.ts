import { ReactNode } from "react";

import { ZeroXAddress } from "../wallet-selector/EvmWalletSelectorContext.types";

export type LarskristoHellheadsContextControllerProps = {
  children: ReactNode;
};

export type LarskristoHellheadsContextActions = {
  fetchContractValues: { isLoading: boolean };
  getTokenPrice: { isLoading: boolean };
  buyToken: { isPending: boolean; isConfirmed: boolean; transactionHash?: string };
};

export type LarskristoHellheadsContractValues = {
  name: string;
  symbol: string;
};

export type TokenPrice = {
  rawValue: bigint;
  formattedValue: string;
  exchangeRate?: number;
  exchangeRateFormatted?: string;
};

export type Royalty = {
  rawValue: bigint;
  percentage: number;
  percentageFormatted: string;
};

export type LarskristoHellheadsContextType = {
  contractValues?: LarskristoHellheadsContractValues;
  contractAddress?: string;
  actions: LarskristoHellheadsContextActions;
  owner?: ZeroXAddress;
  tokenPrice?: TokenPrice;
  royalty?: Royalty;
  fetchContractValues: (address: string) => Promise<void>;
  ownerOf: (tokenId: number) => Promise<void>;
  getTokenPrice: (tokenId: number, options?: { excludeExchangeRate?: boolean }) => Promise<TokenPrice | undefined>;
  royaltyInfo: (tokenId: number) => Promise<void>;
  buyToken: (tokenId: number) => Promise<void>;
  connectedAccountIsOwner: () => boolean;
};
