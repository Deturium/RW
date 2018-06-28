export default {
  namespace: 'recite',

  state: {
    reciteList: [
      "Recite",
      "Melody",
      "Kira",
      "PandaE",
    ],
    progress: 0,
    isForget: false,
    reciteTotal: 4,
  },

  reducers: {
    remember(state) {
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
    *forget({payload: {curWord}}, {put}) {

      // no new word to recite
      if (!curWord)
        return

      console.log(curWord)

      yield put({
        type: '_forget'
      })
    },
  },
}
