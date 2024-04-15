import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { PATHS } from '../../shared/lib/react-router';
import { ChangeUserData } from '.';

export const changeUserDataPageRoute: RouteObject = {
  path: PATHS.changeUserData,
  element: createElement(ChangeUserData),
};
