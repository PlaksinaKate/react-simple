import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { PATHS } from '../../shared/lib/react-router';
import { Registration } from './registration.ui';

export const registerPageRoute: RouteObject = {
  path: PATHS.registration,
  element: createElement(Registration),
};
