
import Favorite from "../components/Favorite/Favorite";
import HallOfGlory from "../components/hallOfGlory/HallOfGlory";
import { SlideItem } from "../components/imageSlider/SlideItem";
import  Error404  from "../pages/Error404";


import HomePage from "../pages/HomePage";
import RandomPage from "../pages/RandomPage";
export const RANDOM_ROUTE='/random'
export const ALLCITATES_ROUTE='/all'
export const FAVORITE_ROUTE='/favorites'
 export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: RANDOM_ROUTE,
    element: <RandomPage />,
  },
  {
    path: ALLCITATES_ROUTE,
    element: <HallOfGlory />,
  },
  {
    path: FAVORITE_ROUTE,
    element: <Favorite />,
  },
  {
    path: `${FAVORITE_ROUTE}/:id`,
    element: <SlideItem />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
