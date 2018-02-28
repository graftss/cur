import { prop } from 'ramda';

export const itemResponseSchema = {
  items: prop('items'),
  tabId: prop('tabId'),
  tabIndex: prop('tabIndex'),
};
