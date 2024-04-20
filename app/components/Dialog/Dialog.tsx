import { DialogProps } from "@/app/components/Dialog/Dialog.types";
import styles from "./Dialog.module.scss";
import PriceChangeIndicator from "@/app/components/PriceChangeIndicator/PriceChangeIndicator";
import Button from "@/app/components/Button/Button";
import { useEffect, useState } from "react";
import { useTokens } from "@/app/hooks/tokens/useTokens";
import { formatPrice } from "@/app/utils/utils";
export default function Dialog({ open, onClose }: DialogProps) {
  const [currentAccount, setCurrentAccount] = useState("");
  const { ethPrice, exchangeRate } = useTokens();

  useEffect(() => {
    const { ethereum } = window;
    // @ts-ignore
    ethereum?.on("accountsChanged", (accounts: any) => {
      if (accounts[0]) {
        setCurrentAccount(accounts[0]);
        console.log("Account changed to:", accounts[0]);
      } else {
        setCurrentAccount("");
      }
    });
  }, []);

  const handleConnectWallet = async () => {
    const ethereum = window.ethereum;

    if (ethereum) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      console.log("current account:", address);
      setCurrentAccount(address);
    } else {
      console.log("You need to install Metamask");
    }
  };

  if (!open) return null;

  return (
    <>
      <div className={styles.dialogOverlay} onClick={onClose} />
      <div className={styles.dialog}>
        <div className={styles.dialogInner}>
          <div className={styles.panel}>
            <div className={styles.panelItem}>
              <div className={styles.exchangeRate}>
                <p>1 ETH = {exchangeRate} WBTC</p>
                <span>({formatPrice(ethPrice)})</span>
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

          <Button onClick={handleConnectWallet}>
            {currentAccount ? "Connected" : "Connect Wallet"}
          </Button>
        </div>
      </div>
    </>
  );
}
