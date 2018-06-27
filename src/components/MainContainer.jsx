import React from 'react'
import styled from 'styled-components'

import {
  Paper,
} from '@material-ui/core'

const customPager = ({ tabSize, ...rest }) => <Paper {...rest} />

export default styled(customPager)`
  max-width: ${props => `${160 * props.tabSize}px`};
  min-height: 50vh;
  margin: auto;

  @media (min-width: ${props => `${160 * props.tabSize}px`}) {
    margin-top: 15vh;
  }
`
