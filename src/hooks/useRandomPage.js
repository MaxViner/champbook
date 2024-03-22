import { useState, useEffect } from 'react';

const useRandomPage = (pages) => {
    const generateRandomIndex = ()=>pages && Math.floor(Math.random() * pages.length)
  const [randomIndex, setRandomIndex] = useState(generateRandomIndex);
    const [randomPage, setRandomPage] = useState({})
  const loadNewRandomPage = () => {
    if (pages.length!==0 || !pages || randomIndex === 0) {
        var newRandomIndex = generateRandomIndex()
            setRandomIndex(newRandomIndex);
            console.log('reload');
            findRandomPage(newRandomIndex);
    }
}
  const findRandomPage = (randomIndex) => {
      const randomPage = pages.find((page) => page.id === randomIndex);
      return randomPage
    };


    useEffect(
        ()=>{
            const page = findRandomPage(randomIndex)
            if (!page) {
                console.log('no');
                loadNewRandomPage()
              } 
            setRandomPage(
                page
            )
        },[randomIndex, pages]
    )


  return { randomIndex, randomPage, loadNewRandomPage};
};

export default useRandomPage;