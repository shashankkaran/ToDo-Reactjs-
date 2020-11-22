
import './App.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';



import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TextField from '@material-ui/core/TextField';
function App() {



  const [lists, setlists] = useState([''])
  const [input, setInput] = useState('')
  const addIT = (event) => {
    setlists([...lists, input])
    setInput('')
  }

  return (
    <div>


      <form autoComplete="off">
        <TextField value={input} onChange={event => setInput(event.target.value)} label=" 👽  What's on your mind" variant="outlined" />
      </form>
      <br />





      <Button disabled={!input} onClick={addIT} variant="contained" color="primary">
        +
</Button>
















      <List  component="nav" >
        <ListItem button>
          <ListItemIcon>  ToDo List
          </ListItemIcon>
          <ListItemText  primary=  {lists.map(todo =>

<ol>
<li style={{textAlign:"right",paddingRight:"13%"}}>
{todo}
</li>
</ol>
)} />
        </ListItem>


      </List>










      
    </div>
  );
}

export default App;
