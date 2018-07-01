import React from 'react'
import styled from 'styled-components'
import { connect } from 'dva'

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

const StyledWordDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 40px;
`

const StyledButton = styled(Button).attrs({
  variant: "contained",
})`
  && {
    min-width: 300px;
    margin: 5px 30px;
    text-transform: none;
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

@connect((state) => ({
  reciteList: state.recite.reciteList,
  progress: state.recite.progress,
  isForget: state.recite.isForget,
  reciteTotal: state.recite.reciteTotal,
}))
export default class Recite extends React.PureComponent {

  componentDidMount() {
    this.props.dispatch({
      type: 'recite/getRecite'
    })
  }

  remember = () => {
    const { reciteList, progress } = this.props
    this.props.dispatch({
      type: 'recite/remember',
      payload: {
        id: reciteList[progress].id
      }
    })
  }

  forget = () => {
    const { reciteList, progress, isForget } = this.props

    if (isForget) {
      this.props.dispatch({
        type: 'recite/addToBook',
        payload: {
          id: reciteList[progress].id
        }
      })
      return
    }

    this.props.dispatch({
      type: 'recite/forget',
      payload: {
        curWord: reciteList[progress]
      }
    })
  }

  render() {
    const { reciteList,  progress, reciteTotal, isForget } = this.props

    const word = reciteList[progress] || {
      word: "- Yhaha -"
    }

    return (
      <StyleWrapperDiv>

        <StyledWordDiv>
          <Typography variant="display1" component="h2">
            { word.word }
          </Typography>
          {
            isForget && <Typography variant="subheading" color="textSecondary" component="p">
              { word.translate }
            </Typography>
          }
        </StyledWordDiv>

        <StyledButton color="primary" onClick={this.remember}>
          { !isForget ? "Yep, I already know." : "Ok, I know now." }
        </StyledButton>
        <StyledButton color="secondary" onClick={this.forget}>
          { !isForget ? "Oh, I forget." : "Emm, add to book." }
        </StyledButton>

        <Tooltip title={`${progress} / ${reciteTotal}`} placement="bottom" open={true}>
          <StyledProgress value={ 100 * progress / reciteTotal} />
        </Tooltip>
      </StyleWrapperDiv>
    )
  }
}
