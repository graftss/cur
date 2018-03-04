import { TYPES } from './actions';

const initialState = {
  appraisals: [],
};

const addSnapshot = (appraisal, snapshot) => ({
  ...appraisal,
  snapshots: [...appraisal.snapshots, snapshot],
});

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

    case TYPES.APPRAISALS_SNAPSHOT: {
      const { id, snapshot } = payload;

      return {
        ...state,
        appraisals: state.appraisals.map(
          a => a.id === id ? addSnapshot(a, snapshot) : a
        ),
      };
    }

    default: return state;
  }
}
