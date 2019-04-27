import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const styles = {
  handle: {
    position: 'absolute',
    top: '17px',
    right: '18px'
  },
  reveal: {
    color: 'black',
    fontSize: '14px',
    cursor: 'pointer'
  },
  container: {
    position: 'relative'
  }
}

const Password = (props) => {

  // const [ password, setPassword ] = useState('')
  const [ showingPassword, toggle ] = useState(false)

  return (
    <div style={styles.container}>
      {
        !showingPassword
          ? (
            <Input
              {...props}
              error={props.formerror}
              onChange={(e) => props.handlechange(e, 'password')}
              value={props.password}
              style={props.styles}
              type="password"
            />
          )
          : (
            <Input
              {...props}
              error={props.formerror}
              onChange={(e) => props.handlechange(e, 'password')}
              value={props.password}
              style={props.styles}
              type="text"
            />
          )
      }

      <div style={styles.handle}>
        {
          showingPassword
            ? (<a style={styles.reveal} onClick={() => { toggle(false)}}>Hide</a>)
            : (<a style={styles.reveal} onClick={() => { toggle(true)}}>Show</a>)
        }
      </div>
    </div>
   );
}

export default Password;