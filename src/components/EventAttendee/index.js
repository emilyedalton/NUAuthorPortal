import React, {Component} from 'react'
import {List, Image} from 'semantic-ui-react'


class EventAttendee extends Component {
    render () {
        const {attendees} = this.props
    return(
<List.Item>
    {/* <Image as= 'a'size ='mini'circluar src={attendees.photoURL} */}
    />
</List.Item>
    )
    
    }
    
    
    }
    export default EventAttendee 