import React, {useState, useEffect} from 'react';
import { Modal, Input } from 'antd';
import 'antd/lib/modal/style/index.css';
import 'antd/lib/input/style/index.css';
import { Header, Button, Image, Form, Loader } from 'semantic-ui-react';
import { postReviews } from '../../services/auth.ts'
import Router from 'next/router';
import './less/notificationModal.less';
import Display from '../shared/Display';

const STARS_COUNT = 5;

const NotificationModal = (props) => {

  const [STARS, updateStars] =useState(Array(STARS_COUNT).fill(null));
  const [rating, updateCount] = useState(1);
  const[description, updateDesc] = useState('')
  const [loading, setloading] = useState(false)

  const cancelReview = () => {
    props.setIsWritingReview(false);
  }

  const rate = (i) => {
    let n = STARS.map((star, j) => {
      return j <= i ? 'filled' : null
    })
    updateStars(n)
    updateCount(i + 1)
  }

  const submitReview = () => {
    let data = {
      description,
      rating,
      providerId: props.review.user.id,
      userId: props.user.id
    }
    // console.log(data)
    setloading(true)
    postReviews(data)
    .then(res => {
      // console.log(res)
      setloading(false)
      props.setIsWritingReview(false);  
    })
    .catch(err => {
      console.log(err)
      setloading(false)
      props.setIsWritingReview(false);
    })
  }

  return (
    <Modal
      visible={props.isWritingReview}
      wrapClassName="notification-modal"
      onCancel={cancelReview}
      closable={false}
      footer={null}
      centered={true}
      title={null}
    >
      <Header className="has-font-freight mb-5" as="h2" textAlign="center">
        Review
      </Header>
      <div className="info-box mt-15">
        <Image className="avatar mr-10" src={props.review.user.userPhoto} />
        <span className="fw900">{props.review.user.name}</span>
      </div>

      <Header as="h4" className="fw100 mb-5 notificationModal-rate--header">Rate { props.review.user.name } </Header>
      <div className="notificationModal-stars--panel mb-30">
        {
          STARS.map((star, index) => {
            return star ? <img key={index} onClick={() => rate(index)} src='/static/icons/filled-star.svg' /> : <img key={index} onClick={() => rate(index)} src='/static/icons/empty-star.svg' />
          })
        }
      </div>
      <Form>
        <Input.TextArea rows={9} value={description} onChange={(e) => updateDesc(e.target.value)} autosize={{ minRows: 9, maxRows: 9 }} placeholder='How was your experience' />
      </Form>
      <div className="btn-container">
        <Button className="" onClick={() => submitReview()} secondary>
          <Display if={!loading}>
          Submit
          </Display>
          <Display if={loading}>
            <Loader active inline='centered' />
          </Display>
        </Button>
      </div>
    </Modal>
  );
}

export default NotificationModal;