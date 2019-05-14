import React from 'react';
import { Input, Button, Image, Container, Grid } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style/index.css';
import './less/searchForm.less';

const SearchForm = () => {
  return (
    <div className="searchForm">
      <Container>
        <Grid className="has-bg-white" stackable columns={4}>
          <Grid.Row>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <Input className="has-width-95" icon={<Image src="/static/images/search.png" />} placeholder='Try “Make Up”' />
            </Grid.Column>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <Input className="has-width-95" icon={<Image src="/static/images/poscode.png" />} placeholder='Postcode' />
            </Grid.Column>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <DatePicker
                className="date--picker has-width-95"
                showTime
                placeholder="When do you want this?"
                suffixIcon={<Image src="/static/images/calender.png" />}
              />
            </Grid.Column>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <Button className="has-full-width" secondary content="Search" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
   );
}

export default SearchForm;