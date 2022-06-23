import { useState } from "react";
export const useModal = (initialValue = false, callback) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);
  if (callback) callback();
  return [isOpen, openModal, closeModal];
};
