
import Favorite from "../components/favorites/Favorite";
import  Error404  from "../pages/Error404";
import HomePage from "../pages/HomePage";
import RandomPage from "../pages/RandomPage";
import AllQuotesPage from "../pages/AllQuotesPage";
export const RANDOM_ROUTE='/random'
export const ALLCITATES_ROUTE='/all'
export const FAVORITE_ROUTE='/favorites'
export const HOME_ROUTE = '/'
 export const routes = [
  {
    path: HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: RANDOM_ROUTE,
    element: <RandomPage />,
  },
  {
    path: ALLCITATES_ROUTE,
    element: <AllQuotesPage />,
  },
  {
    path: FAVORITE_ROUTE,
    element: <Favorite />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
