export type RateType = {
  time: string;
  maxPrice: string;
  minPrice: string;
  openPrice: string;
  closePrice: string;
  liquidity: string;
  totalSupply: string;
};

export type RatesResponse = {
  key: string;
  rates: RateType[];
};

export const getTokenRatesHistory = async (): Promise<RatesResponse> => {
  const response = await fetch(
    "https://api.portals.fi/v2/tokens/rates-history?periodInDays=1&id=ethereum:0x0000000000000000000000000000000000000000",
    {
      headers: {
        Authorization: "Bearer a94cb5e8-f672-48fd-9b47-cb13aaee68a1",
      },
    },
  );
  return await response.json();
};
