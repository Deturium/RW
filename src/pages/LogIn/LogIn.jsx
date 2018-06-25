import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'


const styles = theme => ({
  container: {
    width: 300,
    margin: '100px auto',
    padding: '50px 30px',
  },
  button: {
    marginTop: 30,
  }
})

@withStyles(styles)
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
    const { classes } = this.props
    const { username, password, isRemember } = this.state

    return (
      <Paper className={classes.container}>
      <form noValidate autoComplete="off">
        <FormGroup>
          <Typography align="center" variant="title">
            {"RW"}
          </Typography>
          <TextField
            id="username"
            label="username"
            value={username}
            onChange={this.handleChange('username')}
            margin="normal"
          />
          <TextField
            id="password"
            label="password"
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
          <Button variant="contained" color="primary" className={classes.button}>
            LOGIN
          </Button>
        </FormGroup>
      </form>
      </Paper>
    )
  }
}
