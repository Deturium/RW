export default {
  namespace: 'user',

  state: {
    isLogin: true,
    username: 'Melody'
  },

  reducers: {
    logOut(state) {
      return { ...state, isLogin: false }
    },
  },

  effects: {
    *logIn({ payload }, { put }) {
      yield put({ type: 'logIn' })
    },
  },
}
