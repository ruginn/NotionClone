"use client";

import { useEffect, useState } from "react";

import { SettingsModal } from "@/components/modal/SettingsModal";
import { CoverImageModal } from '@/components/modal/CoverImageModal'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};