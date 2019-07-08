import React, {useState} from 'react'
import CustomImageUploader from '../../components/shared/CustomImageUploader';
import './less/lookbook.less'
import { Grid, Button } from 'semantic-ui-react';
export default function LookBook() {
    const getUserphotoImageString = (e) => {
        console.log(e)
    }
    const getImageFile = (e) => {
        console.log(e)
    }

    const [isAdding, updateIsAdding] = useState(false)

    return (
        <div className="look">
            {
                isAdding ? <CustomImageUploader  getImageString={getUserphotoImageString} getImageFile={getImageFile}>
                                <div className="imgWrap">
                                    <img src='/static/images/EmptyBanner.png' className="camera" alt=""/>
                                </div>
                            </CustomImageUploader> :
                <div>
                    <Button primary onClick={() => updateIsAdding(true)}>
                        Add new Image
                    </Button>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <img src="/static/images/trends/trend1.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <img src="/static/images/trends/trend1.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <img src="/static/images/trends/trend1.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <img src="/static/images/trends/trend1.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <img src="/static/images/trends/trend1.png" />
                            </Grid.Column>
                            <Grid.Column>
                                <img src="/static/images/trends/trend1.png" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            }            
        </div>
    )
}
