import React, {Component} from 'react'
import {Button, Card, Grid, Segment, Icon, List, Label} from 'semantic-ui-react'
import EventAttendee from '../EventAttendee'
import {Link} from 'react-router-dom'


class PeopleListItem extends Component {
    render () {
        const {auth,event, deleteEvent,} = this.props
    return(
        <Card>
          <Card.Content>
           <Link to={`/user/${event.hostUid}`} style={{color: 'black'}}>

                         <h4>{event.lastName}, {event.firstName}</h4>  </Link> 
                         </Card.Content>
     </Card>
    )
    
    }
    
    
    }
    export default PeopleListItem 