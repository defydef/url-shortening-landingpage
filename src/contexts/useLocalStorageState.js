import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, shortUrl) {
  const [storedUrl, setStoredUrl] = useState(function () {
    const storedValue = localStorage.getItem(shortUrl);
    return storedValue ? JSON.parse(storedValue) : initialState;
    // initialize values in state using callback function that get values from local storage. this only executes on initial render
  });
  useEffect(
    function () {
      localStorage.setItem(shortUrl, JSON.stringify(storedUrl));
    },
    [storedUrl, shortUrl]
  );
  return [storedUrl, setStoredUrl];
}
