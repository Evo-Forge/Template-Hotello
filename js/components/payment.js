import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';


import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Tab, Image, Input, Icon} from 'react-essence';

var tabs = {
 'header': [
   { 'context': (<Text classes={'e-text-grey-900 e-text-uppercase'}>Credit Card</Text>) },
   { 'context': (<Image src={'../assets/img/wallet-logo.png'} classes={'e-img-rsp'}/>) },
   { 'context': (<Image src={'../assets/img/rsz_paypal.jpg'} classes={'e-img-rsp'}/>) },
   { 'context': (<Text classes={'e-background-yellow-500 e-text-grey-900'}>
                  <Text type={'p'}>ATM</Text>
                  <Text type={'p'}>TRANSFER</Text>
                </Text>) }
  ],
  'rows': [
   (<Block classes={'e-text-center credit-card'}>
      <Block classes={'bd-bottom'}>
        <Text type={'p'} classes={'e-text-grey-900 e-text-uppercase'}>Credit Card Info</Text>
        <Block classes={'e-v-center e-h-center'}>
          <Image src={'../assets/img/mastercard.jpg'} classes={'e-padding-10'}/>
          <Image src={'../assets/img/visa_logo.png'} classes={'e-padding-10'}/>
        </Block>
      </Block>
      <Block classes={'e-flex-container e-align-column'}>
        <Block classes={'e-flex-container e-align-row bd-bottom e-space-between e-v-center'}>
          <Text type={'span'} classes={'e-text-grey-500 e-body1'}>Card Number</Text>
          <Input classes={'has-success'} type={'text'} name={'label'} placeholder={'008 7906 5800 4444'}/>
        </Block>
        <Block classes={'e-flex-container e-align-row bd-bottom e-space-between e-v-center'}>
          <Text type={'span'} classes={'e-text-grey-500 e-body1'}>Cardholder Name</Text>
          <Input classes={'has-success'} type={'text'} name={'label'} placeholder={'Martina Breslin'}/>
        </Block>
        <Block classes={'e-flex-container e-align-row bd-bottom e-space-between e-v-center'}>
          <Text type={'span'} classes={'e-text-grey-500 e-body1'}>Exp. Date</Text>
          <Input classes={'has-success input-adjust'} type={'text'} name={'label'} placeholder={'06/16'}/>
          <Text type={'span'} classes={'e-text-grey-500 e-body1'}>CVV</Text>
          <Input classes={'has-success input-adjust'} type={'text'} name={'label'} placeholder={'321'}/>
        </Block>
        <Link to="/content/success">
          <Btn label={'Finish Order'} ripple={true} type={'succes'} className={'flat e-background-light-green-500'} />
        </Link>
      </Block>
   </Block>
   ),
   (<Block classes={'e-text-center e-flex-container e-v-center e-align-column wallet e-space-between'}>
     <Image src={'../assets/img/google-wallet.png'}/>
     <Block classes={'e-padding-10'}>
       <Icon name={"image-brightness-1"} className={"e-text-blue-500"} />
       <Icon name={"image-brightness-1"} className={"e-text-red-500"} />
       <Icon name={"image-brightness-1"} className={"e-text-yellow-700"} />
       <Icon name={"image-brightness-1"} className={"e-text-grey-100"} />
     </Block>
     <Text type={'p'} classes={'e-text-grey-500 e-body1 e-padding-10'}>Enter Wallet PIN</Text>
     <Input classes={'has-success'} type={'text'} name={'label'}/>
   </Block>
   ),
   (<Block classes={'paypal e-align-column e-text-center'}>
     <Text type={'p'} classes={'e-text-blue-400 e-title e-padding-10'}>Pay with PayPal</Text>
     <Text type={'a'}>
      <Image src={'../assets/img/paypal-btn.png'} classes={'e-img-rsp'}/>
    </Text>
   </Block>
   ),
   (<Text>Pay with ATM Transfer</Text>)
 ]
};

class HotelloPayment extends React.Component {

    render() {
        return (
          <Block classes={'hotello-payment'}>
            <Block classes={'e-background-blue-grey-900 flex start header-h'}>
              <Link to="/content/info">
                <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-blue-grey-900 e-text-grey-100 icon-close e-no-margin'} />
              </Link>
              <Block classes={'center-header flex '}>
                <Image src={'../assets/img/call.png'} className={'logo-img padding-col'}/>
                <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-100 inline'}><b>Payment Method</b></Text>
              </Block>
            </Block>
            <Tab
              data={tabs}
              classes={'e-background-grey-100 e-text-grey-50'}
              indicator={'e-background-grey-300'}/>
          </Block>
        );
    }
}

module.exports = HotelloPayment;
