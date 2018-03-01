import { compose, path, replace } from 'ramda';

export const routerPathname = path(['location', 'pathname']);

export const trackedAppraisalId = compose(
  replace('/track/', ''),
  routerPathname,
);

export const editedAppraisalId = compose(
  replace('/edit/', ''),
  routerPathname,
);

export const trackedLogId = compose(
  replace('/log/', ''),
  routerPathname,
);
