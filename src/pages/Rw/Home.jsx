import React from 'react'
// import styled from 'styled-components'

import { withRouter } from 'dva/router'

import {
  Typography,
  Button,
} from '@material-ui/core'

@withRouter
export default class extends React.PureComponent {

  jumpToLogin = () => {
    this.props.history.push('login')
  }

  render() {
    return (
      <>
        <Typography variant="headline" component="h2">
          Welcome Melody
        </Typography>
        <Typography variant="headline" component="h2">
        </Typography>
        <Button variant="contained" color="primary" onClick={this.jumpToLogin}>
          Login
        </Button>
      </>
    )
  }
}
