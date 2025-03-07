import React from 'react'
import { Box } from 'grommet/es6/components/Box'
import { Heading, HeadingProps } from 'grommet/es6/components/Heading'
import { Text } from 'grommet/es6/components/Text'

interface HeaderProps extends Pick<HeadingProps, 'level' | 'size' | 'margin' | 'textAlign' | 'fill'> {
  children: React.ReactNode
}

export const Header = ({
  children,
  level = 2,
  margin = { top: 'none' },
  textAlign,
  fill,
  ...props
}: HeaderProps) => (
  <Heading level={level} margin={margin} textAlign={textAlign} fill={fill} {...props}>
    {children}
  </Heading>
)

export const ModalHeader = ({ children, ...props }: Omit<HeaderProps, 'fill'>) => {
  const { level, ...rest } = props

  return (
    <Header level={level || 2} size="medium" fill {...rest}>
      {children}
    </Header>
  )
}

interface ModalSplitHeaderProps {
  children: React.ReactNode
  side: React.ReactNode
}
export const ModalSplitHeader = ({ children, side }: ModalSplitHeaderProps) => (
  <Header level={2} size="medium" fill>
    <Box direction="row-responsive" gap="medium" justify="between" align="baseline">
      {children}
      <Text weight="normal">{side}</Text>
    </Box>
  </Header>
)
