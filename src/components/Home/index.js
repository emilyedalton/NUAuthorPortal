import React from 'react'

import {Button, Container, Header, Segment, Grid} from 'semantic-ui-react'
import  './style.css'

const Home =({history})=> {
    return(
        <div>

        <Container 
       
        
        >
       
         <Header as='h1' content="Northwestern University Press | Author Portal" 
         style={{
             fontSize: '4em',
             marginTop: "3em",
             color: "#4E2A84"
         }}
         />  
         <Button onClick={()=>history.push('/events')}
         basic content="Go Somewhere"
         />
         </Container>
         </div>
    )
    
    }

    
    
    export default Home 