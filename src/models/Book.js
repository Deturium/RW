import axios from 'axios'

export default {
  namespace: 'book',

  state: {
    wordList: []
  },

  reducers: {
    restate(_, {payload: {wordList}}) {

      return {
        wordList
      }
    },
  },

  effects: {
    *getWordList(_, {put}) {
      const wordList = yield axios.get('/api/v1/book')
        .then(res => res.data)

      yield put({
        type: 'restate',
        payload: {
          wordList
        }
      })
    },

    *delWord({payload: {id}}, {put}) {
      yield axios.delete('/api/v1/book', {
        data: {
          id
        }
      })

      yield put({
        type: 'getWordList'
      })
    },

    *create({payload: {id}}) {
      yield axios.post('/api/v1/book', {
        data: {
          id
        }
      })
    }
  },
}
