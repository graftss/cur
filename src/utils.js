import {
  assoc,
  curry,
  map,
  merge,
  reduce,
  values,
  zipObj,
} from 'ramda';

export const keyMirror = keys => zipObj(keys, keys);

export const argCreator = (type, props) => (...args) => ({
  type,
  payload: zipObj(props, args),
});

export const constantCreator = type => () => ({ type });

export const identityCreator = type => payload => ({ type, payload });

export const errorCreator = type => payload => ({ type, payload, error: true });

export const mapSelectorsToProps = selectorMap => (
  state => map(selector => selector(state), selectorMap)
);

export const mergeValues = obj => reduce(merge, {}, values(obj));

export const pickDefined = curry((props, obj) => reduce(
  (result, prop) => {
    if (!obj[prop]) {
      throw new Error(`pickDefined: prop "${prop}" not found`);
    } else {
      return assoc(prop, obj[prop], result);
    }
  },
  {},
  props,
));