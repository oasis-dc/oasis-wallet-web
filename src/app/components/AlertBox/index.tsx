import { Box, BoxProps } from 'grommet/es6/components/Box'
import { Text } from 'grommet/es6/components/Text'
import { normalizeColor } from 'grommet/es6/utils'
import * as React from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export type AlertBoxStatus = 'error' | 'warning' | 'warning-weak' | 'ok' | 'ok-weak' | 'info'

interface Props {
  status: AlertBoxStatus
  justify?: BoxProps['justify']
  /** Example `icon={<Info size="20px" />}` */
  icon?: React.ReactNode
  children: React.ReactNode
  endSlot?: React.ReactNode
}

const mapStatus = {
  error: {
    color: 'alert-box-error',
    background: 'alert-box-error-background',
  },
  warning: {
    color: 'alert-box-warning',
    background: 'alert-box-warning-background',
  },
  'warning-weak': {
    color: 'alert-box-warning',
    background: 'alert-box-warning-weak-background',
  },
  ok: {
    color: 'alert-box-ok',
    background: 'alert-box-ok-background',
  },
  'ok-weak': {
    color: 'alert-box-ok-weak',
    background: 'alert-box-ok-weak-background',
  },
  info: {
    color: 'alert-box-info',
    background: 'alert-box-info-background',
  },
}

export function AlertBox(props: Props) {
  const theme = useContext(ThemeContext)
  // If we don't normalize upfront then grommet auto-detects darkness of background, and decides to use ['alert-box-warning'].dark with ['alert-box-warning-background'].dark
  const color = normalizeColor(mapStatus[props.status].color, theme)

  return (
    <Box
      border={
        props.status === 'warning-weak'
          ? undefined
          : {
              color: color,
              side: 'left',
              size: '3px',
            }
      }
      background={{ color: mapStatus[props.status].background }}
      pad={{ horizontal: 'small' }}
    >
      <Box direction="row" justify={props.justify ?? 'start'} pad={{ vertical: 'xsmall' }}>
        <Box direction="row" gap="small" align="center">
          {props.icon && <Text color={color}>{props.icon}</Text>}
          <Text size="xsmall" weight="bold" style={{ verticalAlign: 'middle' }}>
            {props.children}
          </Text>
        </Box>
        {props.endSlot}
      </Box>
    </Box>
  )
}
