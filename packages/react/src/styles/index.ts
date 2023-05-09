import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ldev-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  config,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
