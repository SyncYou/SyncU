// utils/validateUrl.ts
import { normalizeUrl } from "./NormalizeUrl";

export const validateUrl = (url: string): boolean => {
  try {
    const normalizedUrl = normalizeUrl(url);
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlPattern.test(normalizedUrl);
  } catch (error) {
    return false;
  }
};