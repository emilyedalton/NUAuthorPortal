import React, {Component} from 'react'
import { Grid, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import EventList from '../EventList'
import { deleteEvent } from '../EventList/eventActions'
import LoadingComponent from '../Loader';
import { firestoreConnect } from 'react-redux-firebase';
import {sortByAuthor, getAllEvents, sortByTitle} from '../EventList/eventActions'

const mapState =(state) => ({
    events: state.events,
    loading: state.async.loading,
    auth:state.firebase.auth, 


})

const actions = {
    deleteEvent,
    sortByAuthor,
    getAllEvents,
    sortByTitle
}
class EventDashboard extends Component {
    state = {
        moreEvents: false,

    }

    async componentDidMount (){
        let all= await this.props.getAllEvents()
        console.log(all)}

   
    sortByAuthor = async()=>{
      
        let next= await this.props.sortByAuthor()
        console.log(next)
    }

    sortByTitle = async()=>{
      
        let sorted= await this.props.sortByTitle()
        console.log(sorted)
    }
    // componentDidUpdate = prevProps => {
    //     if (this.props.events !== prevProps.events) {
    //       this.setState({
    //         loadedEvents: [...this.state.loadedEvents, ...this.props.events]
    //       });
    //     }
    //   };

    // sortByAuthor = async() =>{
    //     const {events} = this.props;
    //     // let lastEvent = events && events[events.length - 1]
    //     // console.log(lastEvent)
    //     let next = await this.props.sortByAuthor()
    //     console.log(next)
    //     if (next && next.docs && next.docs.length <= 1){
    //         this.setState({
    //             moreEvents: true
    //         })
    //     }
    // }
   

    handleDeleteEvent = (eventID)=>() => {
        this.props.deleteEvent(eventID)

        }
    

    render () {
        const {events, loading, auth} =this.props; 
        if (loading) return <LoadingComponent/>
    return(
    
<Grid>
<h1>Title List</h1>
 <Button  onClick={this.sortByAuthor} content= "Sort by Author Last Name"/>
 <Button  onClick={this.sortByTitle} content= "Sort by Title"/>
 <Grid.Row/>

 <Grid.Column width = {2}/>

<Grid.Column width ={12}>
<Grid.Column width = {2}/>

<EventList
auth ={auth}
events={events}
deleteEvent ={this.handleDeleteEvent}
getEventsForDashboard={this.getEventsForDashboard}
/>


</Grid.Column>


</Grid>

    )
    
    }
    
    
    }
    export default connect(
        mapState, 
        actions
    )(firestoreConnect([{collection: 'events'}])(EventDashboard));