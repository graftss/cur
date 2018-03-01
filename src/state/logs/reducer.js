import { TYPES } from './actions';
import { logSchema } from '../schema/log';

const initialState = {
  logs: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case TYPES.LOG_CREATE: {
      const { log } = payload;

      return { ...state, logs: state.logs.concat(log) };
    }

    case TYPES.LOG_DELETE: {
      const { id } = payload;

      return { ...state, logs: state.logs.filter(a => a.id !== id) };
    }

    case TYPES.LOG_UPDATE: {
      const { log } = payload;

      return {
        ...state,
        logs: state.logs.map(a => a.id === log.id ? log : a),
      };
    }

    case TYPES.LOG_ADD_BATCH: {
      const { logId, items } = payload;

      return {
        ...state,
        logs: state.logs.map(
          log => log.id === logId ?
            logSchema.addBatch(log, items) :
            log
        ),
      };
    }

    default: return state;
  }
}
