import React from 'react'
import styled from 'styled-components'

import {
  Button,
  Typography,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@material-ui/core'

const ButtonV = styled(Button)`
  && {
    margin-top: 40px;
  }
`

export default class LoginForm extends React.Component {

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
          <ButtonV variant="contained" color="primary">
            LOGIN
          </ButtonV>
        </FormGroup>
      </form>
    )
  }
}
