import React, {Component} from 'react'
import { Segment, List, Item, Label} from 'semantic-ui-react'


// import { Grid, Button} from 'semantic-ui-react'
// import { connect } from 'react-redux'
// import EventList from '../EventList'
// import EventForm from '../EventForm';
// import cuid from 'cuid'
// import {createEvent, deleteEvent, updateEvent} from '../EventList/eventActions'


class Attendees extends Component {
   
render (){
    return(
     <div>
        <Segment
          textAlign="center"
          style={{ border: 'none' }}
          attached="top"
          secondary
          inverted
          color="teal"
        >
          2 People Going
        </Segment>
        <Segment attached>
          <List relaxed divided>
            <Item style={{ position: 'relative' }}>
              <Label
                style={{ position: 'absolute' }}
                color="orange"
                ribbon="right"
              >
                Host
              </Label>
              <Item.Image size="tiny" src="/assets/user.png" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <a>Attendee Name</a>
                </Item.Header>
              </Item.Content>
            </Item>
          </List>
        </Segment>
      </div>
    
)
    }
    }
    export default Attendees