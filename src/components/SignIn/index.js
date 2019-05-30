import React from 'react'
import {Dropdown, Menu }from 'semantic-ui-react'

const SignIn = ({signOut, currentUser}) =>{
return (

       <Menu.Item position="right">
         <Dropdown pointing="top left" text={currentUser}>
           <Dropdown.Menu>
             <Dropdown.Item text="Create Event" icon="plus" />
             <Dropdown.Item text="My Events" icon="calendar" />
             <Dropdown.Item text="My Network" icon="users" />
             <Dropdown.Item text="My Profile" icon="user" />
             <Dropdown.Item text="Settings" icon="settings" />
             <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
           </Dropdown.Menu>
         </Dropdown>
       </Menu.Item>
)

}
export default SignIn