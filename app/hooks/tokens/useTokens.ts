import { getTokens, TokensResponse } from "@/app/api/tokens/tokensApi";
import { useEffect, useMemo, useState } from "react";

export const useTokens = () => {
  const [tokensData, setTokensData] = useState<TokensResponse>();

  useEffect(() => {
    (async () => {
      const tokensData = await getTokens();
      setTokensData(tokensData);
    })();
  }, []);

  const ethPrice = useMemo(() => {
    const ethToken = tokensData?.tokens.find((item) => item.symbol === "ETH");
    return ethToken?.price ?? 0;
  }, [tokensData]);

  const wBTCPrice = useMemo(() => {
    const wBTCToken = tokensData?.tokens.find((item) => item.symbol === "WBTC");
    return wBTCToken?.price ?? 0;
  }, [tokensData]);

  const exchangeRate = useMemo(() => {
    if (ethPrice && wBTCPrice) {
      return (ethPrice / wBTCPrice).toFixed(10);
    }
  }, [ethPrice, wBTCPrice]);

  return {
    tokens: tokensData,
    ethPrice,
    wBTCPrice,
    exchangeRate,
  };
};
