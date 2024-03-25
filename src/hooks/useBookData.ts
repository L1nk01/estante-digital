import { useEffect, useState } from "react";

export const useBookData = () => {
  const [bookData, setBookData] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=the%20silent%20pacient");
        const data = await response.json();
        setBookData(data.items);
      } catch (error) {
        console.error("Hubo un problema con la solicitud fetch", error);
      }
    };

    fetchData();
  }, []);

  return bookData;
};