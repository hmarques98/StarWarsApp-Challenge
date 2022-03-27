import React from 'react'
import styled from 'styled-components/native'
import {
  LayoutProps,
  layout,
  compose,
  ColorProps,
  color,
  space,
  SpaceProps,
  BordersProps,
  borders,
  variant,
  FlexProps,
  flex,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
} from 'styled-system'
import { theme } from '../../../core/theme'
type VariantTypes = 'primary' | 'secondary'
interface BoxProps
  extends LayoutProps,
    ColorProps<typeof theme>,
    SpaceProps<typeof theme>,
    BordersProps<typeof theme>,
    FlexProps,
    PositionProps,
    FlexboxProps {
  children?: React.ReactNode
  bgVariant?: VariantTypes
}

const variantStyle = () => {
  return variant<BoxProps, VariantTypes, 'bgVariant'>({
    key: 'box',
    prop: 'bgVariant',
    variants: {
      primary: {
        backgroundColor: 'primary',
      },
      secondary: {
        backgroundColor: 'secondary',
      },
    },
  })
}

const Box = styled.View<BoxProps>`
  ${compose(color, layout, space, borders, flex, position, flexbox)}
  ${variantStyle()}
`

export default Box
