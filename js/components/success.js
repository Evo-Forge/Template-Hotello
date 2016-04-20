import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';


import {Block,
        Btn,
        Divider,
        Icon,
        Image,
        Input,
        List, ListItem,
        Tab,
        Text
      } from 'react-essence';


class HotelloSuccess extends React.Component {
    render() {
        return (
          <Block>
            <Block classes={'hotello-success'}>
              <Block classes={'full-h bg-end'}>
                <Block classes={'header-h flex start'}>
                  <Link to="/content/browser">
                    <Btn icon={"navigation-close"} ripple={true} type={'fab-mini'} className={'fab-mini close-bg e-text-blue-grey-900 e-no-margin'} />
                  </Link>
                </Block>
                <Block classes={'e-text-center margin-b-15 padding-15'}>
                  <Image src={'../assets/img/call-end.png'} alt="ringing bell" classes={'logo-end'}/>
                  <Text type={'h2'} className={'e-subhead e-text-light-green-500 e-text-uppercase margin-t-para'}>Hotello</Text>
                </Block>
                <Text type={'h2'} className={'e-title e-text-blue-grey-900 e-text-uppercase e-text-center'}>Thank You!</Text>
                <Text type={'h2'} className={'e-title e-text-blue-grey-900 e-text-uppercase e-text-center'}>Your Order is successfull</Text>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloSuccess;
