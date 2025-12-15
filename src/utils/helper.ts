import { decryptData, encryptData } from "./crypto";

export const getLocalStorageValues = (key: string) => {
  try {
    const userText = localStorage.getItem(key);
    return userText ? decryptData(userText) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const setLocalStorageValues = (data: any, key: string) => {
  try {
    const e = encryptData(data);
    localStorage.setItem(key, e);
  } catch (error) {
    return null;
  }
};

export const formatPrice = (value: any) => {
  const num = typeof value === "string" ? parseFloat(value) : value;
  return num.toFixed(2);
};
