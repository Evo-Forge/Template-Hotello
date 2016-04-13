import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Input} from 'react-essence';

class HotelloLogin extends React.Component {

    render() {
        return (
          <Block classes={'hotello-login e-background-white'}>
            <Block classes={'e-text-center'}>
              <Btn icon={'navigation-close'} ripple={true} className={'e-left e-text-black e-background-white close-btn'} />
              <Text className={'e-text-center e-text-black e-title e-text-uppercase'}>login</Text>
            </Block>
            <Block classes={'e-align-column e-padding-30'}>
              <Input type={'text'} name={'label'} label={'Email or Username'}/>
              <Input type={'text'} name={'label'} label={'Password'}/>
              <Btn label={'Login'} ripple={true} type={'succes'} className={'flat'} />
              <Text type={'a'} classes={'e-text-center e-subhead'}>
                Forgot Password?
              </Text>
              <Text type={'a'} classes={'e-text-center e-subhead'}>
                Register an Account
              </Text>
            </Block>
            <Block classes={'e-text-center'}>
              <Text type={'span'} classes={'e-title e-text-uppercase separator'}>
                or
              </Text>
            </Block>
            <Block classes={'e-text-center'}>
              <Btn label={'Facebook'} ripple={true} type={'succes'} className={'flat e-background-blue-800'} />
              <Btn label={'Google'} ripple={true} type={'succes'} className={'flat e-background-red-400'} />
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloLogin;
