import { create } from "zustand";

import { ProductType } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: ProductType;
  onOpen: (data: ProductType) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductType) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
