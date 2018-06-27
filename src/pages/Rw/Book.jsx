import React from 'react'
// import styled from 'styled-components'


import {
  Typography,
} from '@material-ui/core'

export default class Book extends React.PureComponent {

  render() {
    return (
      <>
        <Typography variant="headline" component="h2">
          Book
        </Typography>
      </>
    )
  }
}
