import React from 'react'
import { Grid } from 'semantic-ui-react';
import './less/service.less'

const Service = (props) => {
  return (
    <div className="service">
    <Grid stackable>
        <Grid.Row>
            <Grid.Column width={10}>
              <p className="serviceTitle">
                Title of service
              </p>
              <p className="serviceDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores mollitia, illum deleniti quaerat in voluptatibus ipsa nesciunt eos, maxime qui ab 
              </p>
              <p className="serviceDuration">
                <img src="../static/icons/clock.svg" alt=""/> 45 mins - 1 hour
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <p className="serviceCost">
                £50
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <img src="../static/icons/add.svg" className="addService" alt=""/>
            </Grid.Column>
          </Grid.Row>
        </Grid>      
    </div>
  )
}

export default Service
