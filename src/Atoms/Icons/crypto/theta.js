// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2ab8e6" r="16"/><path d="M10.96 6h10.08l.96.993v18.014l-.96.993H10.96l-.96-.993V6.993zm.96 18.013h8.16V7.987h-8.16zm7.134-5.17h-2.087v2.263h-1.884v-2.262h-2.087v-1.949h6.058zm0-5.582v1.948h-6.058v-1.948h2.087v-2.263h1.884v2.263z" fill="#fff" fill-rule="nonzero"/></g>
  </>
)

export const CryptoTheta = withStyle(InnerSvg, 32, 32, 'CryptoTheta', true)