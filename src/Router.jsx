import { createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import LoginPage from './Login/pages/LoginPage';
import JoinPage from './Join/pages/JoinPage';
import MainGraphPage from './MainGraph/pages/MainGraphPage';
import FoodInfoPage from './FoodWiki/pages/FoodInfoPage';
import AddMealPage from './AddMeal/pages/AddMealPage';
import FoodWikiPage from './FoodWiki/pages/FoodWikiPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/join',
    element: <JoinPage></JoinPage>,
  },
  {
    path: '/',
    element: <MainGraphPage></MainGraphPage>,
    // 추후 바로 Main으로 연결하되, 로그인 안되어있으면 login page로 route
  },
  { path: '/addMeal', element: <AddMealPage></AddMealPage> },
  {
    path: '/foodSearch:food',
    element: <FoodInfoPage></FoodInfoPage>,
  },
  {
    path: '/foodWiki',
    element: <FoodWikiPage></FoodWikiPage>,
  },
]);

export default router;
