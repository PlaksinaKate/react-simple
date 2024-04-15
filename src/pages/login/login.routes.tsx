import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { PATHS } from '../../shared/lib/react-router';
import { Login } from './login.ui';

export const loginPageRoute: RouteObject = {
  path: PATHS.login,
  element: createElement(Login),
};
