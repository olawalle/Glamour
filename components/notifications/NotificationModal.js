import React from 'react';
import { Modal } from 'antd';
import 'antd/lib/modal/style/index.css';
import { Header, TextArea, Button, Image, Form } from 'semantic-ui-react';
import './less/notificationModal.less';

const STARS_COUNT = 5;
const STARS = Array(STARS_COUNT).fill(null);

const NotificationModal = (props) => {

  const cancelReview = () => {
    props.setIsWritingReview(false);
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
      <div className="is-h-centered mt-15">
        <Image className="is-round h28 mr-10" src={props.review.user.avatar} />
        <span className="fw900">{props.review.user.name}</span>
      </div>

      <Header as="h4" className="fw100 mb-5 notificationModal-rate--header">Rate { props.review.user.name } </Header>
      <div className="notificationModal-stars--panel mb-30">
        {
          STARS.map((star, index) => {
            return (
              <img key={index} src='/static/icons/empty-star.svg' />
            )
          })
        }
      </div>
      <Form className="mb-30">
        <TextArea rows={9} placeholder='How was your experience' />
      </Form>
      <div className="is-v-centered">
        <Button className="h60 w126" secondary content="Submit" />
      </div>
    </Modal>
  );
}

export default NotificationModal;