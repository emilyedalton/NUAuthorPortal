import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT, FETCH_EVENT} from './eventConstants'
import { asyncActionStart, asyncActionFinish, asyncActionError } from '../Async/asyncActions';
import {fetchSampleData} from "../../data/mockapi"
import {toastr} from 'react-redux-toastr'
import {createNewEvent} from '../../common/util/helpers'

export const createEvent = (event) => {
    return async (dispatch, getState, {getFirestore, getFirebase}) =>{
        const firestore = getFirestore()
        const firebase= getFirebase()
        const user = firebase.auth().currentUser
        const photoURL = getState().firebase.profile.photoURL;
        const newEvent = createNewEvent(user, photoURL, event)
        try{
        let createdEvent = await firestore.add('events', newEvent)
        await firestore.set(`event_attendee/${createdEvent.id}_${user.uid}`, {
        eventId: createdEvent.id,
        userUid: user.uid,
        host: true
      });
    toastr.success('Success', 'event has been created')
    return createdEvent
} catch (error){
    console.log("error from eventActions File" + error)
    toastr.error('oops', 'something went wrong')
}
};
};

export const updateEvent = (event) => {
    return async (dispatch, getState, {getFirestore} )=>{
        const firestore = getFirestore()
        try{
await firestore.update(`events/${event.id}`, event)
    toastr.success('Success', 'event has been updated')
} catch (error){
    toastr.error('oops', 'something went wrong')
    }
}
};
export const deleteEvent = (event) => {
    return async (dispatch, getState, {getFirestore} )=>{
        const firestore = getFirestore()
        try{
await firestore.remove(`events/${event.id}`)
    toastr.success('Success', 'event has been updated')
} catch (error){
    toastr.error('oops', 'something went wrong')
    }
}
};

export const fetchEvents = event => ({
  
        type: FETCH_EVENT,
        payload: {event}
    
})

export const loadEvent = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            let event = await fetchSampleData();
            dispatch(fetchEvents(event))
            dispatch(asyncActionFinish())
        } catch (error) {
            console.log(error);
            dispatch(asyncActionError())
        }
    }
}