import { TYPES } from './actions';

const initialState = {
  appraisals: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.APPRAISALS_CREATE: {
      const { appraisal } = payload;

      return { ...state, appraisals: state.appraisals.concat(appraisal) };
    }

    case TYPES.APPRAISALS_DELETE: {
      const { id } = payload;

      return { ...state, appraisals: state.appraisals.filter(a => a.id !== id) };
    }

    case TYPES.APPRAISALS_UPDATE: {
      const { appraisal } = payload;

      return {
        ...state,
        appraisals: state.appraisals.map(a => a.id === appraisal.id ? appraisal : a),
      };
    }

    default: return state;
  }
}
