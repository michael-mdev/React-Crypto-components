// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const SvgFabFigma = (props) => (
  <svg viewBox="0 0 341.3 512" {...props}>
    <path d="M341.3 256c0 47.1-38.2 85.3-85.3 85.3s-85.3-38.2-85.3-85.3 38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3zM256 170.7c47.1 0 85.3-38.2 85.3-85.3S303.1 0 256 0H85.3C38.2 0 0 38.2 0 85.3s38.2 85.3 85.3 85.3C38.2 170.7 0 208.9 0 256s38.2 85.3 85.3 85.3C38.2 341.3 0 379.5 0 426.7S38.2 512 85.3 512s85.3-38.2 85.3-85.3v-256H256z" />
  </svg>
)

export const FabFigma = withStyle(SvgFabFigma, 'FabFigma', false)