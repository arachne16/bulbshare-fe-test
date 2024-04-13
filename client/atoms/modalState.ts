import { atom } from "recoil";

export const modalState = atom({
  key: "modal",
  default: { state: false, itemId: "" },
});
