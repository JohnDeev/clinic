import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import './sass/Main.scss' // webpack must be configured to do this

export default class Calendario extends React.Component {

  render() {
    return (
      <FullCalendar
      defaultView="dayGridMonth" 
      plugins={[ dayGridPlugin ]} 
      events={[
        { title: 'Cumple fulano', date: '2020-06-09' },
        { title: 'Cumple sutano', date: '2020-06-15' },
        { title: 'Cumple mengano', date: '2020-06-21' },
        { title: 'Cumple Juli', date: '2020-07-03' },
        
        
      ]}/>
    )
  }

}