import React from 'react'
import styled from 'styled-components'
import { connect } from 'dva'
import { withRouter } from 'dva/router'

import {
  Button,
  Typography,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel
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
export default class FormLogIn extends React.Component {

  state = {
    username: '',
    password: '',
    isRemember: false,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleRemeber = () => {
    this.setState({
      isRemember: !this.state.isRemember
    })
  }

  loginHandle = () => {
    this.props.dispatch({
      type: 'user/logIn',
      payload: {
        ...this.state,
        callback: () => {
          this.props.history.push('/home')
        }
      }
    })
  }

  render() {
    const { username, password, isRemember } = this.state

    return (
      <form noValidate autoComplete="off">
        <FormGroup>
          <Typography align="center" variant="title">
            {"Recite Word"}
          </Typography>
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
          <FormControlLabel
            control={
              <Checkbox
                checked={isRemember}
                onChange={this.handleRemeber}
              />
            }
            label="Remember me"
          />
          <StyledButton onClick={this.loginHandle}>
            LOGIN
          </StyledButton>
        </FormGroup>
      </form>
    )
  }
}
