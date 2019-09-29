import React from 'react';
import { Container, Segment, Header, Divider, Grid, Image, List } from 'semantic-ui-react';
import Link from 'next/link';
import './less/footer.less';

const Footer = () => {
  return (
    <Segment className="footer">
      <Container>
        <Grid stackable columns={4}>
          <Grid.Row>
            <Grid.Column width="4" >
              <Image src='/static/images/logowhite.svg' size='small' />
            </Grid.Column>
            <Grid.Column width="4">
              <List link>
                <List.Header>Company</List.Header>
                <Link href="/aboutus"><List.Item as='a'>About us</List.Item></Link>
                <Link href="/"><List.Item as='a'>How it works</List.Item></Link>
                <Link href="/termsandconditions"><List.Item as='a'>Terms and conditions</List.Item></Link>
                <Link href="/privacypolicy"><List.Item as='a'>Privacy policy</List.Item></Link>
              </List>
            </Grid.Column>
            <Grid.Column width="4" >
              <List link>
                <List.Header>Services</List.Header>
                <Link href='/'><List.Item as='a'>Hair</List.Item></Link>
                <Link href='/'><List.Item as='a'>Hair removal</List.Item></Link>
                <Link href='/'><List.Item as='a'>Massage</List.Item></Link>
                <Link href='/'><List.Item as='a'>Nails</List.Item></Link>
                <Link href='/'><List.Item as='a'>Face</List.Item></Link>
                <Link href='/'><List.Item as='a'>Body</List.Item></Link>
              </List>
            </Grid.Column>
            <Grid.Column width="4" >
              <List link>
                <List.Header>Contact us</List.Header>
                <List.Item as='a'>
                  <a href="mailto:support@glamourondemandltd.com">
                  support@glamourondemandltd.com
                  </a>
                </List.Item>
                <List.Item>020 3570 3466</List.Item>
              </List>
              {/* <List className="social-links" horizontal relaxed>
                <List.Item >
                  <a target="_blank" href="http://facebook.com/glamour"><Image size="tiny" src="/static/icons/facebook.svg" /></a>
                </List.Item>
                <List.Item>
                  <a><Image size="tiny" src="/static/icons/twitter.svg" /></a>
                </List.Item>
                <List.Item>
                  <a><Image size="tiny" src="/static/icons/instagram.svg" /></a>
                </List.Item>
                <List.Item>
                  <a><Image size="tiny" src="/static/icons/linkedin.svg" /></a>
                </List.Item>
              </List> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider/>
        <Header className="copyright" textAlign="center" as="h3">
          <Image src="/static/icons/copyright.svg" />
          <span>Glamour on Demand 2019</span>
        </Header>
      </Container>
    </Segment>
  );
}

export default Footer;