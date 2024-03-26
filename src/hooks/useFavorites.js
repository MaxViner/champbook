import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../utils/localStorage';
import { fetchPages } from '../store/slices/pagesSlice';
import { useDispatch } from 'react-redux';

const useFavorites = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.pages);
  const [favorites, setFavorites] = useState(getFavorites());
  const [citates, setCitates] = useState([]);

  const upadateFavorites = () => setFavorites(getFavorites());

  useEffect(() => {
    if (pages.length !== 0) {
      favorites.forEach((item) => {
        let page = pages.find((page) => page?.id === item.id);
        let FavorCitates = [];
        for (let index = 0; index < item?.numbers.length; index++) {
          let citate = page?.citates.find((c) => c?.number === item?.numbers[index]);
          FavorCitates.push(citate);
        }
        setCitates((prev) => [
          ...prev,
          {
            img: page?.img,
            id: page?.id,
            FavorCitates: FavorCitates,
            author: page?.author,
          },
        ]);
      });
    }
  }, [pages, favorites]);

  useEffect(() => {
    setCitates([]);
    setTimeout(() => {
      dispatch(fetchPages());
    }, 6000);
  }, [dispatch]);

  return { favorites, citates, upadateFavorites };
};

export default useFavorites;