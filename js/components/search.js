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


class HotelloSearch extends React.Component {
    render() {
        return (
          <Block>
            <Block classes={'hotello-search'}>
              <Block classes={'bg-airport full-h'}>
                <Block classes={'header-h flex start'}>
                  <Btn icon={"navigation-close"} ripple={true} type={'fab-mini'} className={'fab-mini close-bg e-text-grey-100 no-margin'} />
                  <Text type={'h2'} classes={'e-text-center e-subhead e-text-grey-100 center-header'}> Search Hotels </Text>
                </Block>
                <Block className={'block-h flex'}>
                  <Block classes={'padding-row'}>
                    <Block classes={'border-input-icon full-w'}>
                      <Icon name={"communication-location-on"} className={"e-text-light-green-500 e-right icon-in-input"} />
                      <Input type={'text'} name={'label'} placeholder={'Cluj-Napoca, RO'} classes={'with-icon e-text-blue-grey-900 white'}/>
                    </Block>
                    <Block classes={'border-input-icon'}>
                      <Icon name={"action-event"} className={"e-text-light-green-500 e-right icon-in-input"} />
                      <Input type={'text'} name={'label'} placeholder={'15 MAY 2016'} classes={'with-icon e-text-blue-grey-900 date-picker white'}/>
                      <Text type={'span'} classes={'e-text-center e-body1 e-text-light-green-500 align-to'}>TO</Text>
                      <Input type={'text'} name={'label'} placeholder={'17 MAY 2016'} classes={'with-icon e-text-blue-grey-900 date-picker white'}/>
                    </Block>
                    <Block classes={'border-input-icon full-w'}>
                      <Icon name={"maps-hotel"} className={"e-text-light-green-500 e-right icon-in-input"} />
                      <Input type={'text'} name={'label'} placeholder={'1 ROOM'} classes={'with-icon e-text-blue-grey-900 white'}/>
                    </Block>
                    <Link to="/content/results">
                      <Btn label={'Search Hotel'} ripple={true} type={'submit'} className={'flat e-button e-background-light-green-500 e-text-grey-100 full-w no-margin margin-top-15'} />
                    </Link>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloSearch;
