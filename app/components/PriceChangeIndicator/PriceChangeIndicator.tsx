import { PriceChangeIndicatorProps } from "@/app/components/PriceChangeIndicator/PriceChangeIndicator.types";
import ArrowUp from "@/app/components/Icons/ArrowUp";
import ArrowDown from "@/app/components/Icons/ArrowDown";
import classNames from "classnames";
import styles from "./PriceChangeIndicator.module.scss";

export default function PriceChangeIndicator({
  priceChangePercentage,
}: PriceChangeIndicatorProps) {
  const isPositive = priceChangePercentage >= 0;
  return (
    <div className={styles.priceChange}>
      {isPositive ? <ArrowUp /> : <ArrowDown />}
      <p
        className={classNames({
          [styles.positive]: isPositive,
          [styles.negative]: !isPositive,
        })}
      >{`${priceChangePercentage}%`}</p>
    </div>
  );
}
