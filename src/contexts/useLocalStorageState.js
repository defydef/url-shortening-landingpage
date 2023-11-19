import { useState, useEffect } from "react";

export function useLocalStorageState(uniqueId) {
  const [storedUrl, setStoredUrl] = useState(function () {
    const storedValue = uniqueId && localStorage.getItem(uniqueId);
    return storedValue ? JSON.parse(storedValue) : {};
    // initialize values in state using callback function that get values from local storage. this only executes on initial render
  });
  useEffect(
    function () {
      storedUrl !== "" && storedUrl !== null
        ? localStorage.setItem(uniqueId, JSON.stringify(storedUrl))
        : null;
    },
    [storedUrl, uniqueId]
  );
  return [storedUrl, setStoredUrl];
}
