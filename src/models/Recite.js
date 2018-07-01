import axios from 'axios'

export default {
  namespace: 'recite',

  state: {
    reciteList: [],
    progress: 0,
    isForget: false,
    reciteTotal: 0,
  },

  reducers: {
    reciteList(state, {payload: {reciteList}}) {
      return {
        ...state,
        reciteList,
        reciteTotal: reciteList.length
      }
    },

    _remember(state) {
      const progress = state.progress < state.reciteTotal
        ? state.progress + 1
        : state.reciteTotal

      return {
        ...state,
        progress,
        isForget: false
      }
    },

    _forget(state) {
      return {
        ...state,
        isForget: state.progress < state.reciteTotal
      }
    },
  },

  effects: {
    *getRecite(_, {put}) {
      const reciteList = yield axios.get('/api/v1/recite')
        .then(res => res.data)

      yield put({
        type: 'reciteList',
        payload: {
          reciteList
        }
      })
    },

    *remember({payload: {id}}, {put}) {
      yield axios.post('/api/v1/recite', {
        id
      })

      yield put({
        type: '_remember'
      })
    },

    *forget({payload: {curWord}}, {put}) {

      // no new word to recite
      if (!curWord)
        return

      yield put({
        type: '_forget'
      })
    },

    *addToBook({payload: {id}}, {put}) {
      yield axios.post('/api/v1/book', {
        id
      })

      yield put({
        type: 'remember'
      })
    }
  },
}
