import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';

import { AppBar, Block, Btn, Dialog, DialogHeader, DialogContent, DialogFooter, Divider, Icon, Image, Navigation, Text, Utils, Menu, List, ListItem,Switch } from 'react-essence';

class HotelloNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.visible || false
    };
  }

  componentWillReceiveProps(nextProps) {
    let states = this.state;
    states.open = nextProps.visible;

    this.setState(states);
  }

  render() {
    return (
      <Navigation className={'e-background-grey-100'} visible={this.state.open}>
        <Block className={'e-padding-10 nav-bg e-align-row'}>
          <Block>
            <Icon name={"image-brightness-1"} className={"e-text-grey-900 e-background-grey-900"} />
          </Block>
          <Block>
            <Text type={'h3'} className={'e-text-grey-100 e-title'}>
              Hello, There!
            </Text>
            <Text type={'p'} className={'e-text-grey-100 e-caption'}>
              You might wanna login first
            </Text>
          </Block>
        </Block>
  			<List type={'navigation'} className={'nav-ul e-body1'}>
  				<ListItem>
            <Link to="/content/s-result">
    					<Block classes={'content e-left e-text-grey-900 e-text-uppercase'}>Make A Reservation</Block>
           </Link>
  				</ListItem>
  				<Divider classes={'thinnest e-background-grey-300 e-text-center'} />
  			 <ListItem>
         <Link to="/content/reservation">
  				 <Block classes={'content e-left e-text-grey-900 e-text-uppercase'}>My Reservations</Block>
          </Link>
  			 </ListItem>
  			 <Divider classes={'thinnest e-background-grey-300 e-text-center adjust-divider'} />
  			 <ListItem>
  				<Text type={'a'}>
  				 <Block classes={'content e-left e-text-grey-900 e-text-uppercase'}>My Subscribe</Block>
  				</Text>
  			 </ListItem>
  			 <Divider classes={'thinnest e-background-grey-300 e-text-center adjust-divider'} />
  			 <ListItem>
         <Link to="/content/voucher">
  				 <Block classes={'content e-left e-text-grey-900 e-text-uppercase'}>Voucher Redeem</Block>
          </Link>
  			 </ListItem>
  			 <Divider classes={'thinnest e-background-grey-300 e-text-center adjust-divider'} />
  			 <ListItem>
  				<Text type={'a'}>
  				 <Block classes={'content e-left e-text-grey-900 e-text-uppercase'}>Setting</Block>
  				</Text>
  			 </ListItem>
  			 <Divider classes={'thinnest e-background-grey-300 e-text-center adjust-divider'} />
  			 <ListItem>
  				<Text type={'a'}>
  				 <Block classes={'content e-left e-text-grey-900 e-text-uppercase'}>Help Center</Block>
  				</Text>
  			 </ListItem>
         <Divider classes={'thinnest e-background-grey-300 e-text-center adjust-divider'} />
  			 <ListItem>
         <Link to="/content/login">
  				 <Block classes={'content e-left e-text-grey-900 e-text-uppercase'}>LogIn / Register</Block>
          </Link>
  			 </ListItem>
  		 </List>
     </Navigation>
    );
  }
}

class HotelloHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
      navigation: false
    };
  }

  showNavigation() {
    this.setState({
    dialog: false,
     navigation: true
    });
  }



  render() {
      return (
        <Block classes={'hotello-header e-text-white'}>
          <AppBar className={'e-text-white e-align-row e-background-blue-grey-900 e-text-center'}>
            <Btn icon={"navigation-menu"} className={"e-left e-text-grey-100 e-background-blue-grey-900"} onClick={this.showNavigation.bind(this)} />

            <Text className={'e-text-center e-text-grey-100 e-headline e-text-uppercase'}>hotello</Text>

            <Link to="/content/s-result">
              <Btn icon={"action-search"} className={"e-text-grey-100 e-right e-background-blue-grey-900"} />
            </Link>
          </AppBar>
          <HotelloNavigation visible={this.state.navigation} />
        </Block>

      );
  }
}

module.exports = HotelloHeader;
