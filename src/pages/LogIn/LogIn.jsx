import React from 'react'
import styled from 'styled-components'
import { Switch, Route, withRouter } from 'dva/router'
import urljoin from 'url-join'

import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core'

import FormLogIn from './FormLogIn'
import FormRegister from './FormRegister'
import MainContainer from '../../components/MainContainer'

const StyledDiv = styled.div`
  padding: 60px 30px;
`

@withRouter
export default class LogIn extends React.Component {

  state = {
    tabValue: '',
  }

  handleTabChange = (_, value) => {
    this.setState({
      tabValue: value
    })

    this.props.history.push(
      urljoin(this.props.match.url, value)
    )
  }

  render() {
    const { match } = this.props
    const { tabValue } = this.state

    return (
      <MainContainer tabSize={2}>
        <AppBar position="static">
          <Tabs value={tabValue} centered onChange={this.handleTabChange}>
            <Tab label="Login" value="" />
            <Tab label="Register" value="register" />
          </Tabs>
        </AppBar>
        <StyledDiv>
          <Switch>
            <Route path={`${match.url}/register`} exact component={FormRegister} />
            <Route path={`${match.url}`} component={FormLogIn} />
          </Switch>
        </StyledDiv>
      </MainContainer>
    )
  }
}
