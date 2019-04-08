import {
  BOARDS_FETCHED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';
import competitors from 'data/competitors';
import contests from 'data/contests';

const initialState = {
  listing: [],
  loaded: false,
};

const reducers = {
  [BOARDS_FETCHED]: (state, action) => {
    return {
      listing: action.boards.map((b) => {
        // NOTE: Data summary and aggregation should happen via database query on Back End in actual product
        return {
          ...b,
          competitors: b.competitors.map((c) => {
            return {
              ...competitors.find(e => e.id === c),
              score: contests.reduce((a, contest) => {
                const foundCompetitor = contest.results.competitors.find(competitor => c === competitor.id);
                return !!foundCompetitor && foundCompetitor.score ? a + foundCompetitor.score : a;
              }, 0),
            };
          }).sort((e1, e2) => {
            if (e1.score < e2.score) return 1;
            if (e1.score > e2.score) return -1;
            return 0;
          }),
        };
      }),
      loaded: true,
    };
  },
};

export default createReducer(initialState, reducers);
