import React from 'react';
import ClassNames from 'classnames';

import {Block,
        Image,
        Text
      } from 'react-essence';


class HotelloBrowser extends React.Component {

    render() {
        return (
          <Block>
            <Block classes={'HotelloBrowser e-no-margin'}>
              <Block classes={'e-background-light-green-500 logo flex'} >
                <Block className={'e-text-center'}>
                  <Image src={'assets/img/call.png'} alt="ringing bell" className={'e-text-center'}/>
                  <Text type={'h1'} classes={'e-text-center e-text-grey-100 e-display-2 e-text-uppercase'}>Hotello</Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100 e-text-uppercase'}>Hotel ticketing app</Text>
                </Block>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloBrowser;
