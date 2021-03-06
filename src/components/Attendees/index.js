import React, {Fragment}from 'react'
import { Item, Label, Segment, } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Attendees = ({attendees}) => {
   
  const isHost = false;

    return(
 
    <Fragment>
      <Segment
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color="#4E2A84"
      >
        {attendees && attendees.length}{' '}
        {attendees && attendees.length === 1 ? 'Person' : 'People'} Following
      </Segment>
      <Segment attached>
        <Item.Group divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: 'relative' }}>
                {isHost && (
                  <Label
                    style={{ position: 'absolute' }}
                    color='orange'
                    ribbon='right'
                  >
                    Host
                  </Label>
                )}
                <Item.Image size='tiny' src={attendee.photoURL ||'/assets/user.png' } />
                <Item.Content>
                  <Item.Header as='h3'>
                    <Link to={`/user/${attendee.id}`}>
                      {attendee.displayName}
                    </Link>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </Fragment>
  );
};
    export default Attendees