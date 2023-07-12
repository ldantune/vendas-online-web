import { RouteObject } from 'react-router-dom';
import PageNotFound from './screens/PageNotFound';
import FirstScreen from './screens/FirstScreen';

export enum FirstScreenRoutesEnum {
  FIRST_SCREEN = '/',
}

export const firstScreenRoutes: RouteObject[] = [
  {
    path: FirstScreenRoutesEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <PageNotFound/>,
  },
];
