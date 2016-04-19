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


class HotelloSResult extends React.Component {
    render() {
        return (
          <Block>
            <Block classes={'hotello-sresult'}>

              <Block>
                <Block classes={'e-background-blue-grey-900 flex header-h'}>
                  <Text type={'h2'} classes={'e-text-center e-subhead e-text-grey-100'}>Search Result:
                    <Text type={'span'} classes={'e-text-center e-subhead e-text-light-green-500'}> 35 Hotels</Text>
                  </Text>
                </Block>
                <Block className={'padding-15'}>
                  <Block classes={'padding-row'}>
                    <Block classes={'border-input-icon full-w'}>
                      <Icon name={"communication-location-on"} className={"e-text-light-green-500 e-right icon-in-input"} />
                      <Input type={'text'} name={'label'} placeholder={'Cluj-Napoca, RO'} classes={'with-icon e-text-blue-grey-900'}/>
                    </Block>
                    <Block classes={'border-input-icon'}>
                      <Icon name={"action-event"} className={"e-text-light-green-500 e-right icon-in-input"} />
                      <Input type={'text'} name={'label'} placeholder={'15 MAY 2016'} classes={'with-icon e-text-blue-grey-900 date-picker'}/>
                      <Text type={'span'} classes={'e-text-center e-body1 e-text-light-green-500 align-to'}>TO</Text>
                      <Input type={'text'} name={'label'} placeholder={'17 MAY 2016'} classes={'with-icon e-text-blue-grey-900 date-picker'}/>
                    </Block>
                    <Block classes={'border-input-icon full-w'}>
                      <Icon name={"maps-hotel"} className={"e-text-light-green-500 e-right icon-in-input"} />
                      <Input type={'text'} name={'label'} placeholder={'1 ROOM'} classes={'with-icon e-text-blue-grey-900'}/>
                    </Block>
                    <Link to="/content/login">
                      <Btn label={'Search Hotel'} ripple={true} type={'submit'} className={'flat e-button e-background-light-green-500 e-text-grey-100 full-w e-no-margin e-margin-top-15'} />
                    </Link>
                  </Block>
                </Block>

                <Block classes={'bg-pear align-row padding-15'}>
                  <Block classes={''}>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption inline'}>RATING: 85 din 100</Text>
                    </Block>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title'}>Pear Tree Hotel</Text>
                  </Block>
                  <Block classes={''}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$679</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>

                <Block classes={'bg-apricot align-row padding-15'}>
                  <Block classes={''}>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption inline'}>RATING: 85 din 100</Text>
                    </Block>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title'}>Apricot Tree Hotel</Text>
                  </Block>
                  <Block classes={''}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$1000</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>

                <Block classes={'bg-peach align-row padding-15'}>
                  <Block classes={''}>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption inline'}>RATING: 85 din 100</Text>
                    </Block>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title'}>Peach Tree Hotel</Text>
                  </Block>
                  <Block classes={''}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$889</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>

                <Block classes={'bg-plum align-row padding-15'}>
                  <Block classes={''}>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption inline'}>RATING: 85 din 100</Text>
                    </Block>
                    <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title'}>Plum Tree Hotel</Text>
                  </Block>
                  <Block classes={''}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$654</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>
              </Block>


            </Block>
          </Block>
        );
    }
}

module.exports = HotelloSResult;
