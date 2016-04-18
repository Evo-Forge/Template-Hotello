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


class HotelloVoucher extends React.Component {
    render() {
        return (
          <Block>
            <Block classes={'hotello-voucher'}>
              <Block classes={'full-h bg-voucher'}>
                <Block classes={'header-h flex start'}>
                  <Btn icon={"navigation-close"} ripple={true} type={'fab-mini'} className={'fab-mini close-bg e-text-grey-100 no-margin'} />
                  <Text type={'h2'} classes={'e-text-center e-subhead e-text-grey-100 center-header'}> Redeem Voucher </Text>
                </Block>
                <Block classes={'block-h flex'}>
                  <Block classes={'padding-row'}>
                    <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>If you have a Voucher, please enter the code here:</Text>
                    <Input type={'text'} name={'label'} placeholder={'1254-MNYII-89753'} className={'full-w white center-palceholder'}/>
                    <Btn label={'Continue order'} ripple={true} type={'submit'} className={'flat e-button e-background-light-green-500 e-text-grey-100 full-w no-margin'} />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloVoucher;
