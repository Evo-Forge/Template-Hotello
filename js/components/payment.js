import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Tab, Image} from 'react-essence';

var tabs = {
 'header': [
   { 'context': (<Text classes={'e-text-grey-900 e-text-uppercase'}>Credit Card</Text>) },
   { 'context': (<Image src={'./assets/img/wallet-logo.png'} classes={'e-img-rsp'}/>) },
   { 'context': (<Image src={'./assets/img/paypal-logo.jpg'} classes={'e-img-rsp'}/>) },
   { 'context': (<Text classes={'e-background-yellow-500 e-text-grey-900'}>
                  <Text type={'p'}>ATM</Text>
                  <Text type={'p'}>TRANSFER</Text>
                </Text>) }
  ],
  'rows': [
   (<Block classes={'e-text-center'}>
      <Block>
        <Text type={'p'} classes={'e-text-grey-900 e-text-uppercase'}>Credit Card Info</Text>
        <Image src={'./assets/img/mastercard.jpg'} classes={'card-logo'}/>
        <Image src={'./assets/img/visa_logo.png'} classes={'card-logo'}/>
      </Block>
   </Block>
   ),
   (<Text>This is the context for Tab 2</Text>),
   (<Text>This is the context for Tab with callback alert</Text>),
   (<Text>This is the context for Tab with callback link</Text>)
 ]
};

class HotelloPayment extends React.Component {

    render() {
        return (
          <Block classes={'hotello-payment'}>
            <Tab
              data={tabs}
              classes={'e-background-grey-100 e-text-grey-50'}
              indicator={'e-background-grey-300'}/>
          </Block>
        );
    }
}

module.exports = HotelloPayment;
