import React from 'react'
import styled from 'styled-components'

import {
  Typography,
  Button,
  LinearProgress,
  Tooltip,
} from '@material-ui/core'


const StyleWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`

const StyledText = styled(Typography)`
  && {
    margin-bottom: 40px;
  }
`

const StyledButton = styled(Button).attrs({
  variant: "contained",
})`
  && {
    min-width: 300px;
    margin: 5px 30px;
  }
`

const ProgressDiv = ({variant, value, ...rest}) => <div {...rest}><LinearProgress variant={variant} value={value}/></div>

const StyledProgress = styled(ProgressDiv).attrs({
  variant: "determinate",
})`
  min-width: 300px;
  margin-top: 40px;
  margin-bottom: 80px;
`

export default class Recite extends React.PureComponent {

  state = {
    reciteList: [

    ],
    forgetList: [

    ],
    progress: 3,
  }

  remember = () => {
    this.setState((prevState) => {
      return {progress: prevState.progress + 1}
    })
  }

  render() {
    const { progress } = this.state

    return (
      <StyleWrapperDiv>
        <StyledText variant="display1" component="h2">
          Recite
        </StyledText>

        <StyledButton color="primary" onClick={this.remember}>
          Yahaha, I know.
        </StyledButton>
        <StyledButton color="secondary" onClick={this.forget}>
          Oh, I forget it.
        </StyledButton>

        <Tooltip title={`${progress}/10`} placement="bottom" open={true}>
          <StyledProgress value={ 100 * progress / 10} />
        </Tooltip>
      </StyleWrapperDiv>
    )
  }
}
