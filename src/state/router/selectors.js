import { compose, path, replace } from 'ramda';

export const routerPathname = path(['location', 'pathname']);

export const routeAppraisalId = compose(
  replace('/track/', ''),
  routerPathname,
);
