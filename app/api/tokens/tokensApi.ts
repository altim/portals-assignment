export type TokenType = {
  address: string;
  name: string;
  network: string;
  price: number;
  symbol: string;
};

export type TokensResponse = {
  tokens: TokenType[];
};

export const getTokens = async (): Promise<TokensResponse> => {
  const response = await fetch(
    "https://api.portals.fi/v2/tokens?ids=ethereum%3A0x0000000000000000000000000000000000000000%2Cethereum%3A0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    {
      headers: {
        Authorization: "Bearer a94cb5e8-f672-48fd-9b47-cb13aaee68a1",
      },
    },
  );
  return await response.json();
};
