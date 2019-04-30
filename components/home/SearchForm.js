import React from 'react';
import { Input, Button, Image, Container, Grid } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style/index.css';

const styles = {
  SearchComtainer: {
  },
  Container:{
  },
  Button: {
    height: '60px',
    // width: '120px'
    width: '90%'
  },
  Input: {
  }
}

const SearchForm = () => {
  return (
    <div className="searchForm" style={styles.SearchComtainer}>
      <Container style={styles.Container}>
        <Grid stackable columns={4}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Input className="has-width-95" style={styles.Input} icon={<Image src="/static/images/search.png" />} placeholder='Try “Make Up”' />
            </Grid.Column>
            <Grid.Column width={4}>
              <Input className="has-width-95" style={styles.Input} icon={<Image src="/static/images/poscode.png" />} placeholder='Postcode' />
            </Grid.Column>
            <Grid.Column width={4}>
              <DatePicker
                className="date--picker has-width-95"
                showTime
                placeholder="When do you want this?"
                suffixIcon={<Image src="/static/images/calender.png" />}
              />
            </Grid.Column>
            <Grid.Column width={4}>
              <Button style={styles.Button} secondary content="Search" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>




    </div>
    // <div className="searchForm" style={styles.SearchComtainer}>
    //   <Input  style={styles.Input} icon={<Image src="/static/images/search.png" />} placeholder='Try “Make Up”' />
    //   <Input style={styles.Input} icon={<Image src="/static/images/poscode.png" />} placeholder='Postcode' />
    //   <DatePicker
    //     className="date--picker"
    //     showTime
    //     placeholder="When do you want this?"
    //     suffixIcon={<Image src="/static/images/calender.png" />}
    //   />
    //   <Button style={styles.Button} secondary content="Search" />
    // </div>

   );
}

export default SearchForm;