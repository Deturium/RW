import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import {
  Paper,
} from '@material-ui/core'

const customPager = ({tabSize, ...rest}) => <Paper {...rest} />

export default styled(customPager)`
  position: relative;
  box-sizing: border-box;
  max-width: ${props => `${160 * props.tabSize}px`};
  /* min-height: 50vh; */
  margin: auto;
  margin-top: 15vh;

  @media (max-width: 400px) {
    max-width: 400px;
    height: 100%;
    margin-top: 0;
  }
`

injectGlobal`
  @font-face {
    font-family: 'Roboto';
  }

  html, body {
    margin: 0;
  }

  @media (max-width: 400px) {
    html, body, #root {
      height: 100%;
    }
    #root {
      box-sizing: border-box;
      padding: 0 1px 2px 1px;
    }
  }
`
