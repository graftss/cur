import { connect } from 'react-redux';

import { mapSelectorsToProps } from './selectors';
import * as actionCreators from './actions';
import { pickDefined } from '../utils';

const include = list => list && list.length > 0;

export default ({ actions, selectors } = {}) => (
  connect(
    include(selectors) ? mapSelectorsToProps(selectors) : undefined,
    include(actions) ? pickDefined(actions, actionCreators) : undefined,
  )
);
