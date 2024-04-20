import { useEffect, useMemo, useState } from "react";
import {
  getTokenRatesHistory,
  RatesResponse,
} from "@/app/api/tokens/tokensratesHistory";

export const useTokensRates = () => {
  const [tokensRatesData, setTokensRatesData] = useState<RatesResponse>();

  useEffect(() => {
    (async () => {
      const ratesData = await getTokenRatesHistory();
      setTokensRatesData(ratesData);
    })();
  }, []);

  const dayChange = useMemo(() => {
    if (!tokensRatesData) return 0;
    if (tokensRatesData?.rates.length < 2) return 0;
    const startPrice = Number(tokensRatesData.rates[0].openPrice);
    const endPrice = Number(
      tokensRatesData.rates[tokensRatesData.rates.length - 1].openPrice,
    );
    return Number((((endPrice - startPrice) / endPrice) * 100).toFixed(2));
  }, [tokensRatesData]);

  const lastHourChange = useMemo(() => {
    if (!tokensRatesData) return 0;
    if (tokensRatesData?.rates.length < 2) return 0;

    const lastRateTime = new Date(tokensRatesData.rates[0].time);
    const lastRatePrice = Number(tokensRatesData.rates[0].openPrice);

    const rateFromAnHourAgo = tokensRatesData.rates.find((item) => {
      const itemTime = new Date(item.time);
      const diffInHours =
        (lastRateTime.getTime() - itemTime.getTime()) / (1000 * 60 * 60);
      return diffInHours > 1;
    });

    if (rateFromAnHourAgo) {
      const priceFromAnHourAgo = Number(rateFromAnHourAgo.openPrice);
      return Number(
        (((lastRatePrice - priceFromAnHourAgo) / lastRatePrice) * 100).toFixed(
          2,
        ),
      );
    }

    return 0;
  }, [tokensRatesData]);

  return {
    tokensRatesData,
    dayChange,
    lastHourChange,
  };
};
