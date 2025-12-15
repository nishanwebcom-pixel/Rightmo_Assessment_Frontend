import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_CRYPTO_SECRET_KEY || ""; // keep this secret in env variables

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (cipherText: string) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted ? JSON.parse(decrypted) : null;
};
