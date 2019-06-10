import React from 'react'
import { Image, Button } from 'semantic-ui-react'
import Router from 'next/router';
import Stars from '../shared/stars'
import './less/provider.less'


let toDetails = (props) => {
    Router.push({
        pathname: '/servicedetails',
        query: { provider: props.id }
    })
}

const Provider = (props) => {
    return (
        <div className="providerCard">
            {
                props.instant ? <div className="instant">Instant Booking</div> : <div className="instant_"></div>
            }
            <div className="cardBanner">
                <img src='/static/images/services/body.png' className="BannerImage"  />
            </div>

            {
                props.instant ? 
                    <div className="roundImageWrap"><Image src={props.pictureUrl} /></div> : 
                    <div className="roundImageWrap_"><Image src={props.pictureUrl} /></div> 
            }
            <div className="textWrap">
                <h2 className="name">
                    <b>
                        {props.fullname}
                    </b>
                </h2>
                <h2 className="jobDesc">
                    {props.service ? props.service : '---'}
                </h2>
                <h3 className="desc">
                    {props.description}
                </h3>
            </div>
            <div className="stars">
                {
                    <Stars stars={props.stars ? props.stars : 0} />
                }
                
                <span className="count">({props.ratingsCount ? props.ratingsCount : 0})</span>
                <br/>
                <Button className="signUp" size="huge" secondary onClick={() => toDetails(props)}>View Profile</Button>
            </div>
        </div>
    )
}

export default Provider