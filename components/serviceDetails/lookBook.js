import React from 'react'
import { Grid } from 'semantic-ui-react';
import './less/lookBook.less'

const LookBook_ = (props) => {
  return (
    <div className="lookBook">
        <Grid stackable columns={3}>
            <Grid.Row>
                {
                    props.looks.map((look, i) => {
                        return <Grid.Column key={i} className="lookColumn">
                            <img className="look" src={look.pictureUrl} alt=""/>
                        </Grid.Column>
                    })
                }
            </Grid.Row>
        </Grid>      
    </div>
  )
}

export default LookBook_
