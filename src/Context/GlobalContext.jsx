import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [photos, setPhotos] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPhotos() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos`
      );

      const data = await res.json();

      setPhotos(data);
      setLoading(false);
    }

    getPhotos();
  }, []);

  return (
    <GlobalContext.Provider value={{ photos, loading }}>
      { children }
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}