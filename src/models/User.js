import axios from 'axios'

export default {
  namespace: 'user',

  state: {
    isLogin: false,
    username: ''
  },

  reducers: {
    logOut(state) {
      return { ...state, isLogin: false }
    },

    _logIn(state, {payload: {username}}) {
      return { ...state, isLogin: true, username }
    }
  },

  effects: {
    *logIn({ payload: {username, password, callback} }, { put }) {
      const ret = yield axios.post('/api/v1/login', {
        username,
        password,
      })

      if (ret.data === 'no such user')
        return

      yield put({
        type: '_logIn',
        payload: {
          username,
        }
      })
      callback()
    },

    *register({payload: {username, password, email}}) {
      yield axios.post('/api/v1/register', {
        username,
        password,
        email,
      })
    },

    *settingUpdate({payload: {wordSet, wordNum}}) {
      yield axios.put('/api/v1/setting', {
        wordSet,
        wordNum,
      })
    }
  },
}
