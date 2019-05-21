import { observer } from 'mobx-react'
import React from 'react'
import Tooltip from '@cypress/react-tooltip'

import events from '../lib/events'

import Controls from './controls'
import Stats from './stats'

const Header = observer(({ appState, events, statsStore }) => (
  <header>
    <Stats stats={statsStore} />
    <div className='spacer' />
    <Controls appState={appState} />
  </header>
))

Header.defaultProps = {
  events,
}

export default Header
