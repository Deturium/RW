import React from 'react'
import styled from 'styled-components'

import { withRouter } from 'dva/router'
import { connect } from 'dva'

import {
  Typography,
  Button,
} from '@material-ui/core'

import IconDescription from '@material-ui/icons/Description'

const StyleWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
`

const LogoIcon = styled(IconDescription).attrs({
  color: "error"
})`
  && {
    width: 90px;
    height: 90px;
    margin-top: 15px;
  }
`

const StyledText = styled(Typography).attrs({
  component: "p",
  variant: "subheading",
})`
  && {
    margin-top: 50px;
  }
`

const StyledButton = styled(Button).attrs({
  variant: "contained",
  color: "primary",
})`
  && {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`

const StyledFooter = styled(Typography).attrs({
  component: "p",
  variant: "caption",
})`
  && {
    position: absolute;
    bottom: 15px;
  }
`

@withRouter
@connect((state) => ({
  isLogin: state.user.isLogin,
  username: state.user.username,
}))
export default class Home extends React.PureComponent {

  jumpToLogin = () => {
    this.props.history.push('login')
  }

  logOut = () => {
    this.props.dispatch({
      type: 'user/logOut'
    })
  }

  render() {
    const { isLogin, username } = this.props

    return (
      <StyleWrapperDiv>
        <Typography variant="display1" component="h2">
          Recite Word
        </Typography>

        <LogoIcon />

        {
          !isLogin && <>
            <StyledText>
              You need to login first.
            </StyledText>
            <StyledButton onClick={this.jumpToLogin}>
              Login
            </StyledButton>
          </>
        }
        {
          isLogin && <>
            <StyledText>
              {`Nice to meet you, ${username}.`}
            </StyledText>
            <StyledButton onClick={this.logOut}>
              Logout
            </StyledButton>
          </>
        }

        <StyledFooter>
          Copyright © 2018 ZJU Hydrogen - ALL RIGHTS RESERVED.
        </StyledFooter>

      </StyleWrapperDiv>
    )
  }
}
