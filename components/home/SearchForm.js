import React, { useState } from 'react';
import { Input, Button, Image, Container, Grid } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import 'antd/lib/date-picker/style/index.css';
import './less/searchForm.less';
import Router from 'next/router';
import dayjs from 'dayjs';

const SearchForm = () => {

  const [fields, setfields] = useState({
    searchFor: '',
    postcode: '',
    when: ''
  })

  
  const updateForm = (e, data, type) => {
    let fields_ = {...fields}
    e.target.value ? fields_[type] = e.target.value : fields_[type] = data.value
    setfields(fields_)
  }

  const time = (a, b) => {
    let fields_ = {...fields, when: dayjs(b.split(' ')[0]).$d.toString().split(' ')[0] }
    setfields(fields_)
  }

  const search = () => {
    let url = '/serviceproviders?'
    Object.keys(fields).forEach((field, i) => i === 0 ? url += `${field}=${fields[field]}` : url += `&${field}=${fields[field]}`)
    // console.log(url)
    Router.push(url)
  }

  return (
    <div className="searchForm">
      <Container>
        <Grid className="has-bg-white" stackable columns={4}>
           <Grid.Row>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <Input className="has-width-95" onChange={(e, data) => updateForm(e, data, 'searchFor')} icon={<Image src="/static/icons/search.svg" />} placeholder='Try “Make Up”' />
            </Grid.Column>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <Input className="has-width-95" onChange={(e, data) => updateForm(e, data, 'postcode')} icon={<Image src="/static/icons/grey-map-marker.svg" />} placeholder='Postcode' />
            </Grid.Column>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <DatePicker
                className="date--picker has-width-95"
                showTime
                placeholder="When do you want this?"
                onChange={(e, data) => time(e, data)}
                suffixIcon={<Image src="/static/images/calender.png" />}
              />
            </Grid.Column>
            <Grid.Column mobile={4} tablet={4} largeScreen={4} widescreen={4}>
              <Button className="has-full-width" onClick={search} secondary content="Search" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
   );
}

export default SearchForm;