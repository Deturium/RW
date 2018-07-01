import React from 'react'
import styled from 'styled-components'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

import {
  Button,
  Typography,
  TextField,
  FormGroup,
} from '@material-ui/core'

const StyledButton = styled(Button).attrs({
  variant: "contained",
  color: "primary",
})`
  && {
    margin-top: 40px;
  }
`

@withRouter
@connect()
export default class FormRegister extends React.Component {

  state = {
    username: '',
    password: '',
    email: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  registerHandle = () => {
    this.props.dispatch({
      type: "user/register",
      payload: {
        ...this.state
      }
    })

    this.props.history.push('/login')
  }

  render() {
    const { username, password, email } = this.state

    return (
      <form noValidate autoComplete="off">
        <FormGroup>
          <Typography align="center" variant="title">
            {"Recite Word"}
          </Typography>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={this.handleChange('email')}
            margin="normal"
          />
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={this.handleChange('username')}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.handleChange('password')}
            margin="normal"
          />
          <StyledButton onClick={this.registerHandle}>
            Register
          </StyledButton>
        </FormGroup>
      </form>
    )
  }
}
