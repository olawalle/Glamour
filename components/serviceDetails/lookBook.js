import React from 'react'
import { Grid } from 'semantic-ui-react';
import './less/lookBook.less'

const LookBook = (props) => {
  return (
    <div className="lookBook">
        <Grid stackable columns={3}>
            <Grid.Row>
                <Grid.Column className="lookColumn">
                    <img className="look" src="../../static/images/services/face.png" alt=""/>
                </Grid.Column>
                <Grid.Column className="lookColumn">
                    <img className="look" src="../../static/images/services/face.png" alt=""/>
                </Grid.Column>
                <Grid.Column className="lookColumn">
                    <img className="look" src="../../static/images/services/face.png" alt=""/>
                </Grid.Column>
                <Grid.Column className="lookColumn">
                    <img className="look" src="../../static/images/services/face.png" alt=""/>
                </Grid.Column>
                <Grid.Column className="lookColumn">
                    <img className="look" src="../../static/images/services/face.png" alt=""/>
                </Grid.Column>
                <Grid.Column className="lookColumn">
                    <img className="look" src="../../static/images/services/face.png" alt=""/>
                </Grid.Column>
            </Grid.Row>
        </Grid>      
    </div>
  )
}

export default LookBook
