import React from 'react'
// import styled from 'styled-components'


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


function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default class Book extends React.PureComponent {

  render() {
    return (
      <>
        <List dense={false}>
          {generate(
            <ListItem button>
              <ListItemText
                primary="Recite"
                secondary={'Secondary text'}
              />
              <ListItemSecondaryAction>
                <IconButton>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>,
          )}
        </List>
      </>
    )
  }
}
