import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';


import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Input} from 'react-essence';

class HotelloLogin extends React.Component {

    render() {
        return (
          <Block classes={'hotello-login e-background-white e-flex-container'}>
            <Block classes={'e-align-column e-space-between'}>
              <Block classes={'e-text-center title'}>
                <Link to="/content/browser">
                  <Btn icon={'navigation-close'} ripple={true} className={'e-left e-text-black e-background-white close-btn'} />
                </Link>
                <Text className={'e-text-center e-text-black e-title e-text-uppercase'}>login</Text>
              </Block>
              <Block classes={'e-align-column e-padding-30'}>
                <Input type={'text'} name={'label'} label={'Email or Username'}/>
                <Input type={'text'} name={'label'} label={'Password'}/>
                <Link to="/content/search">
                  <Btn label={'Login'} ripple={true} type={'succes'} className={'flat login-btn e-background-light-green-500'} />
                </Link>
                <Text type={'a'} classes={'e-text-center e-subhead e-padding-20'}>
                  Forgot Password?
                </Text>
                <Link to="/content/register" className={'e-text-center e-subhead e-padding-20'}>
                  Register an Account
                </Link>
              </Block>
              <Block classes={'e-text-center'}>
                <Text type={'span'} classes={'e-title e-text-uppercase separator'}>
                  or
                </Text>
              </Block>
              <Block classes={'e-text-center e-padding-30'}>
                <Btn label={'Facebook'} ripple={true} type={'succes'} className={'flat e-background-blue-800'} />
                <Btn label={'Google'} ripple={true} type={'succes'} className={'flat e-background-red-400'} />
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloLogin;
