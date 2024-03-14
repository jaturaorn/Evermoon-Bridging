"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

type GlobalValue = {
  transpose: boolean;
  setTranspose: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen1: boolean;
  setIsOpen1: Dispatch<SetStateAction<boolean>>;
  isOpen2: boolean;
  setIsOpen2: Dispatch<SetStateAction<boolean>>;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected1: number;
  setSelected1: Dispatch<SetStateAction<number>>;
  selected2: number;
  setSelected2: Dispatch<SetStateAction<number>>;
  price: string;
  setPrice: Dispatch<SetStateAction<string>>;
  multiplyPrice: number | null;
  setMultiplyPrice: Dispatch<SetStateAction<number | null>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleInputChange: any;
  selectDropdown: any;
  selectDropdown1: any;
  selectDropdown2: any;
  clearAllState: any;
} | null;

export const GlobalContext = createContext<GlobalValue>(null);

export function GlobalProvider(props: any) {
  const [transpose, setTranspose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selected, setSelected] = useState(0);
  const [selected1, setSelected1] = useState(0);
  const [selected2, setSelected2] = useState(1);
  const [price, setPrice] = useState("");
  const [multiplyPrice, setMultiplyPrice] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPrice(inputValue);
    const multipliedPrice = parseFloat(inputValue) * 2;
    setMultiplyPrice(isNaN(multipliedPrice) ? 0 : multipliedPrice);
  };

  const selectDropdown = (a: number) => {
    setSelected(a);
    setIsOpen(isOpen);
  };

  const selectDropdown1 = (a: number) => {
    setSelected1(a);
    setIsOpen1(isOpen);
  };

  const selectDropdown2 = (a: number) => {
    setSelected2(a);
    setIsOpen2(isOpen);
  };

  const clearAllState = () => {
    setTranspose(false);
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
    setSelected(0);
    setSelected1(0);
    setSelected2(1);
    setPrice("");
    setMultiplyPrice(null);
  };

  const value: GlobalValue = {
    transpose,
    setTranspose,
    isOpen,
    setIsOpen,
    isOpen1,
    setIsOpen1,
    isOpen2,
    setIsOpen2,
    selected,
    setSelected,
    selected1,
    setSelected1,
    selected2,
    setSelected2,
    price,
    setPrice,
    multiplyPrice,
    setMultiplyPrice,
    showModal,
    setShowModal,
    handleInputChange,
    selectDropdown,
    selectDropdown1,
    selectDropdown2,
    clearAllState,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}