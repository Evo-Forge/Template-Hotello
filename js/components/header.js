import React from 'react';
import ClassNames from 'classnames';

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
      <Navigation className={'e-background-teal-A700'}visible={this.state.open}>
      <Block className={'padding-left-20 e-margin-top-25 e-margin-bottom-25'}>
        <Text className={'e-text-white e-title'}>
          Caterit
        </Text>
      </Block>
			<List type={'navigation'} className={'nav-ul e-body1'}>
				<ListItem>
				 <Text type={'a'}>
					<Block classes={'content e-left e-text-white'}>MY ORDERS</Block>
				 </Text>
				</ListItem>
				<Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>ORDER HISTORY</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>PAYMENT DETAILS</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>DELIVERY ADDRESSES</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>ABOUT</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>LOG OUT</Block>
				</Text>
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
        <Block classes={'e-text-white'}>
          <AppBar className={'e-text-white e-background-grey-900 e-text-center'}>
            <Btn icon={"navigation-menu"} className={"e-left e-text-white e-background-grey-900"} onClick={this.showNavigation.bind(this)} />

            <Text className={'e-text-center e-text-white e-text-uppercase'}>hotello</Text>

            <Btn icon={"action-search"} className={"e-text-white e-right e-background-grey-900"} />
          </AppBar>
          <HotelloNavigation visible={this.state.navigation} />
        </Block>

      );
  }
}

module.exports = HotelloHeader;
