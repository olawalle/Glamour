import React from 'react'
import { Image, Button } from 'semantic-ui-react'


const styles = {
    pageWrap: {
      padding: '20px 100px'
    },
    card: {
        width: '100%',
        margin: '0 0 40px 0',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '0px 0px 10px rgba(99, 115, 129, 0.1)',
        fontFamily: 'sofiapro'
    },
    cardBanner: {
        position: 'relative',
        top: '0',
        width: '100%',
        height: '190px',
        overflow: 'hidden',
        backgroundColor: 'green'
    },
    BannerImage: {
        width: '100%'
    },
    roundImageWrap_: {
        borderRadius: '50%',
        width: '23%',
        zIndex: '100',
        position: 'relative',
        border: '3px solid #fff',
        margin: '-30px auto 0 auto',
        overflow: 'hidden'
    },
    roundImageWrap: {
        borderRadius: '50%',
        width: '23%',
        zIndex: '100',
        position: 'relative',
        border: '3px solid #E84671',
        margin: '-30px auto 0 auto',
        overflow: 'hidden'
    },
    roundImage: {
        width: '100%'
    },
    textWrap: {
        textAlign: 'center',
    },
    stars: {
        padding: '0 60px 12px 60px',
        margin: '0',
        width: '100%',
        textAlign: 'center'
    },
    singleStar: {
        display: 'inLine'
    },
    count: {
        color: '#637381',
        paddingLeft: '12px'
    },
    signUp: {
      borderRadius: '0px',
      height: '49px',
      width: '120px',
      fontSize: '14px',
      margin: '10px 0'
    },
    name: {
        color: '#212B36',
        fontSize: '16px',
        margin: '-40px 0 12px 0',
        fontFamily: 'fontfreightproblack',
    },
    jobDesc: {
        fontSize: '14px',
        color: '#212B36',
        marginTop: '0px',
        fontWeight: '400'
    },
    desc: {
        fontSize: '14px',
        color: '#637381',
        marginTop: '-12px',
        fontWeight: '400',
        padding: '8px 30px'
    },
    instant: {
        width: '40%',
        backgroundColor: '#E84671',
        color: '#fff',
        lineHeight: '40px',
        height: '40px',
        textAlign: 'center',
        position: 'relative',
        top: '-240px',
    },
    instant_: {
        width: '40%',
        color: '#fff',
        lineHeight: '40px',
        height: '40px',
        textAlign: 'center',
        position: 'relative',
        top: '-240px'
    }
}


let filled = (n) => {
    let arr = []
    for (let index = 0; index < n; index++) {
        arr.push('o')  
    }
    return arr
}

let empty = (n) => {
    let arr = []
    for (let index = 0; index < n; index++) {
        arr.push('o')  
    }
    return arr
}

const SingleProvider = (props) => (
    <div style={styles.card}>
        <div style={styles.cardBanner}>
            <img src={props.banner} style={styles.BannerImage}  />
        </div>

        {
            props.instant ? <div style={styles.roundImageWrap}><Image src={props.userPhoto} styles={styles.roundImage} /></div> : <div style={styles.roundImageWrap_}><Image src={props.userPhoto} styles={styles.roundImage} /></div> 
        }
        {
            props.instant ? <div style={styles.instant}>Instant Booking</div> : <div style={styles.instant_}></div>
        }
         <div style={styles.textWrap}>
             <h2 style={styles.name}>
                <b>
                    {props.name}
                </b>
             </h2>
             <h2 style={styles.jobDesc}>
                {props.jobDesc}
             </h2>
             <h3 style={styles.desc}>
                {props.description}
             </h3>
         </div>
         <div style={styles.stars}>
            {
                filled(props.stars).map(elm => <img src='../../static/icons/filled-star.svg' />)
            }
            {
                empty(5 - props.stars).map(elm => <img src='../../static/icons/empty-star.svg' />)
            }
            
            <span style={styles.count}>({props.ratingsCount})</span>
             <br/>
            <Button style={styles.signUp} size="huge" secondary>View Profile</Button>
        </div>
    </div>
)

export default SingleProvider