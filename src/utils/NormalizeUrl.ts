// utils/normalizeUrl.ts
export const normalizeUrl = (url: string): string => {
    // Trim any leading/trailing whitespace
    url = url.trim();
  
    // If the URL doesn't start with 'http://' or 'https://', prepend 'https://'
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }
  
    // Ensure the URL has a valid domain (e.g., 'example.com')
    if (!/^https?:\/\/[^\/\s]+\.[^\/\s]+/i.test(url)) {
      throw new Error("Invalid URL format");
    }
  
    return url;
  };