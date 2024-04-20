import { DialogProps } from "@/app/components/Dialog/Dialog.types";
import styles from "./Dialog.module.scss";
import PriceChangeIndicator from "@/app/components/PriceChangeIndicator/PriceChangeIndicator";
import Button from "@/app/components/Button/Button";
export default function Dialog({ open, onClose }: DialogProps) {
  if (!open) return null;

  const handleConnectWallet = () => {
    console.log("Connecting wallet...");
  };

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialog}>
        <div className={styles.dialogInner}>
          <div className={styles.panel}>
            <div className={styles.panelItem}>
              <div className={styles.exchangeRate}>
                <p>1 ETH = 0.04888019623 WBTC</p>
                <span>($3,047.93)</span>
              </div>
            </div>
            <div className={styles.panelItem}>
              <div className={styles.priceChange}>
                <div className={styles.priceChangeItem}>
                  <p>Price change 24h</p>
                  <PriceChangeIndicator priceChangePercentage={10} />
                </div>
                <div className={styles.priceChangeItem}>
                  <p>Price change 1h</p>
                  <PriceChangeIndicator priceChangePercentage={-5} />
                </div>
              </div>
            </div>
          </div>

          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
}
