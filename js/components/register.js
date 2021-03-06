import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';


import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Input} from 'react-essence';

class HotelloRegister extends React.Component {

    render() {
        return (
          <Block classes={'hotello-login e-background-white'}>
            <Block classes={'e-text-center title'}>
              <Link to="/content/browser">
                <Btn icon={'navigation-close'} ripple={true} className={'e-left e-text-black e-background-white close-btn'} />
              </Link>
              <Text type={'span'} className={'e-text-center e-text-black e-title e-text-uppercase'}>register</Text>
            </Block>
            <Block classes={'e-align-column e-padding-30'}>
              <Input type={'text'} name={'label'} label={'Email'}/>
              <Input type={'text'} name={'label'} label={'Password'}/>
              <Input type={'text'} name={'label'} label={'First Name'}/>
              <Input type={'text'} name={'label'} label={'Last Name'}/>
              <Link to="/content/browser">
                <Btn label={'Register'} ripple={true} type={'succes'} className={'flat login-btn e-background-blue-400'} />
              </Link>
              <Text type={'a'} classes={'e-text-center e-subhead'}>
                Have an account?
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

module.exports = HotelloRegister;
