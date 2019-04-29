import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import ProvidersForm from '../../components/providersForm/providersForm'


const styles = {
    pageWrap: {
      padding: '20px 100px'
    },
}

const SingleProvider = () => (
  <div style={styles.pageWrap}>
    <ProvidersForm />
    <Card>
        <Image src='../../static/images/test.png' />
        <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
            <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            22 Friends
        </a>
        </Card.Content>
    </Card>
  </div>
)

export default SingleProvider