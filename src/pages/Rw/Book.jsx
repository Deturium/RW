import React from 'react'
// import styled from 'styled-components'
import { connect } from 'dva'


import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'

import {
  Delete
} from '@material-ui/icons'


@connect((state) => ({
  wordList: state.book.wordList
}))
export default class Book extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch({
      type: 'book/getWordList'
    })
  }

  deleteHandle = (id) => {
    this.props.dispatch({
      type: 'book/delWord',
      payload: {
        id
      }
    })
  }

  render() {
    return (
      <List dense={false}>
        {
          this.props.wordList.map((word) =>
            <ListItem key={word.id} button>
              <ListItemText
                primary={word.word}
                secondary={word.translate}
              />
              <ListItemSecondaryAction>
                <IconButton onClick={() => this.deleteHandle(word.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        }
      </List>
    )
  }
}
