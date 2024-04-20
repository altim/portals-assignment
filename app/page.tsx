"use client";

import styles from "./page.module.scss";
import Button from "@/app/components/Button/Button";
import { useState } from "react";
import Dialog from "@/app/components/Dialog/Dialog";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className={styles.pageCentered}>
      <Button onClick={handleOpenDialog}>Open Dialog</Button>
      <Dialog open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}
