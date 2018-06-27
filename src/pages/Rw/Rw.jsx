import React from 'react'
import styled from 'styled-components'
import { Switch, Route, withRouter } from 'dva/router'
import urljoin from 'url-join'

import {
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core'

import MainContainer from '../../components/MainContainer'

import Home from './Home'
// import Recite from './Recite'

const StyledDiv = styled.div`
  padding: 60px 30px;
`

@withRouter
export default class extends React.PureComponent {

  state = {
    tabValue: "home",
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
      <MainContainer tabSize={4}>
        <AppBar position="static">
          <Tabs value={tabValue} centered onChange={this.handleTabChange}>
            <Tab label="Home" value="home" />
            <Tab label="Recite" value="recite" />
            <Tab label="Review" value="review" />
            <Tab label="Setting" value="setting" />
          </Tabs>
        </AppBar>

        <StyledDiv>
          <Switch>
            {/* <Route path={`${match.url}/recite`} exact component={} /> */}
            {/* <Route path={`${match.url}/review`} exact component={} /> */}
            {/* <Route path={`${match.url}/setting`} exact component={} /> */}
            <Route path={`${match.url}`} component={Home} />
          </Switch>
        </StyledDiv>
      </MainContainer>
    )
  }
}
