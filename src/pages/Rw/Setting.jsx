import React from 'react'
import styled from 'styled-components'
import { connect } from 'dva'


import {
  Button,
  Typography,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  MenuItem,
} from '@material-ui/core'

const StyleWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`

const StyledForm = styled.form`
  margin: 40px;
`

const StyledTextField = styled(TextField)`
  width: 100%;
`

@connect()
export default class Setting extends React.PureComponent {

  state = {
    wordSet: 'CET4',
    wordNum: 10,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  updateHandle = () => {
    this.props.dispatch({
      type: 'user/settingUpdate',
      payload: {
        ...this.state
      }
    })
  }

  render() {
    return (
      <StyleWrapperDiv>
        <Typography align="center" variant="display1">
          Setting
        </Typography>

        <StyledForm>
          <FormLabel component="legend">Word Set</FormLabel>
          <RadioGroup
            row
            value={this.state.wordSet}
            onChange={this.handleChange('wordSet')}
          >
            <FormControlLabel value="CET4" control={<Radio />} label="CET4" />
            <FormControlLabel value="CET6" control={<Radio />} label="CET6" />
          </RadioGroup>

          <StyledTextField
            select
            value={this.state.wordNum}
            onChange={this.handleChange('wordNum')}
            helperText="Word number to recite one day"
            margin="normal"
          >
              <MenuItem value={5}>
                5
              </MenuItem>
              <MenuItem value={10}>
                10
              </MenuItem>
              <MenuItem value={15}>
                15
              </MenuItem>
              <MenuItem value={20}>
                20
              </MenuItem>
          </StyledTextField>
        </StyledForm>

        <Button variant="contained" color="primary" onClick={this.updateHandle}>
          UPDATE
        </Button>
      </StyleWrapperDiv>
    )
  }
}
