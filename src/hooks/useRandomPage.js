import { useState, useEffect, useCallback } from 'react';

const useRandomPage = (pages) => {
  const generateRandomIndex = useCallback(() => pages && Math.floor(Math.random() * pages.length), [pages]);
  const [randomIndex, setRandomIndex] = useState(generateRandomIndex);
  const [randomPage, setRandomPage] = useState({});
  
  const findRandomPage = useCallback((currentIndex) => {
    const randomPage = pages.find((page) => page.id === currentIndex);
    return randomPage;
  }, [pages]);

  const loadNewRandomPage = useCallback(() => {
    if (pages.length !== 0) {
        var newRandomIndex = generateRandomIndex();
        setRandomIndex(newRandomIndex);
        console.log('reload');
        findRandomPage(newRandomIndex);
    }
}, [pages, generateRandomIndex, findRandomPage]);
 
  useEffect(() => {
    const page = findRandomPage(randomIndex);
    if (!page) {
      loadNewRandomPage();
    }
    setRandomPage(page);
  }, [randomIndex, pages, findRandomPage, loadNewRandomPage]);

  return { randomIndex, randomPage, loadNewRandomPage, generateRandomIndex };
};

export default useRandomPage;
