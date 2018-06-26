import React from 'react'
import styled from 'styled-components'

import {
  Paper,
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core'

import FormLogIn from './FormLogIn'
import FormRegister from './FormRegister'

const Container = styled(Paper)`
  max-width: 380px;
  margin: auto;

  @media (min-width: 380px) {
    margin-top: 16vh;
  }
`

const FormContainer = styled.div`
  padding: 60px 30px;
`

export default class extends React.Component {

  state = {
    tabValue: 0,
  }

  handleTabChange = (_, value) => {
    this.setState({
      tabValue: value
    })
  }

  render() {
    const { tabValue } = this.state

    return (
      <Container>
        <AppBar position="static">
          <Tabs value={tabValue} centered onChange={this.handleTabChange}>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        <FormContainer>
          { tabValue === 0 && <FormLogIn /> }
          { tabValue === 1 && <FormRegister /> }
        </FormContainer>
      </Container>
    )
  }
}
