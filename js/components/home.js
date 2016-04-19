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


class HotelloHome extends React.Component {
    render() {
        return (

          <Block>
          <Link to={'/content/browser'}>
            <Block classes={'hotello-home'}>
              <Block classes={'e-background-light-green-500 full-h flex'} >
                <Block className={'e-text-center'}>

                    <Image src={'assets/img/call.png'} alt="ringing bell"/>

                  <Text type={'h1'} className={'e-display-2 e-text-white e-text-uppercase'}>Hotello</Text>
                  <Text type={'p'} className={' e-body1 e-text-white e-text-uppercase'}>Hotel ticketing app</Text>
                </Block>
              </Block>
            </Block>
            </Link>
          </Block>

        );
    }
}

module.exports = HotelloHome;
