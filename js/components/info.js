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


class HotelloInfo extends React.Component {
    render() {
        return (
          <Block>
            <Block classes={'hotello-info'}>
                <Block classes={'e-background-blue-grey-900 flex start header-h'}>
                  <Link to="/content/description">
                    <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-blue-grey-900 e-text-grey-100 icon-close e-no-margin'} />
                  </Link>
                  <Block classes={'center-header flex '}>
                    <Image src={'../assets/img/call.png'} className={'logo-img padding-col'}/>
                    <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-100 inline'}><b>Book this Hotel</b></Text>
                  </Block>
                </Block>

                <Block classes={'bg-apple flex padding-15'}>
                  <Block>
                    <Block className={'e-text-center'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                    </Block>
                    <Text type={'p'} classes={'e-text-center e-text-grey-200 e-caption'}>RATING: 85 din 100</Text>
                    <Text type={'h2'} classes={'e-text-center e-text-grey-100 e-title e-margin-top-15'}>Apple Tree Hotel</Text>
                    <Block className={'e-text-center'}>
                      <Icon name={"communication-location-on"} className={"e-text-light-green-500"} />
                      <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-100'}>Barcelona, UE</Text>
                    </Block>
                  </Block>
                </Block>

                <List type={'inline'} classes={'align-row around e-background-grey-100 border-b'}>
                 <ListItem classes={'padding-list border-r'}>
                  <Text type={'a'} className={'display-in-b align-list'}>
                   <Icon name={"action-today"} className={"e-text-grey-500 list-icon "} />
                   <Block classes={'display-in-b'}>
                    <Text type={'p'} classes={'e-text-uppercase e-text-blue-grey-900 e-caption'}><b>Check in</b></Text>
                    <Text type={'span'} classes={'e-text-light-green-500 e-caption'}>03 JUNE 2015</Text>
                   </Block>
                  </Text>
                 </ListItem>
                 <ListItem classes={'padding-list border-r'}>
                  <Text type={'a'} className={'display-in-b align-list'}>
                   <Icon name={"action-today"} className={"e-text-grey-500 list-icon"} />
                   <Block classes={'display-in-b'}>
                    <Text type={'p'} classes={'e-text-uppercase e-text-blue-grey-900 e-caption'}><b>Check out</b></Text>
                    <Text type={'span'} classes={'e-text-light-green-500 e-caption'}>06 JUNE 2015</Text>
                   </Block>
                  </Text>
                 </ListItem>
                 <ListItem classes={'padding-list'}>
                  <Text type={'a'} className={'display-in-b align-list'}>
                   <Icon name={"maps-local-hotel"} className={"e-text-grey-500 list-icon"} />
                   <Block classes={'display-in-b'}>
                    <Text type={'p'} classes={'e-text-uppercase e-text-blue-grey-900 e-caption'}><b>Room</b></Text>
                    <Text type={'span'} classes={'e-text-light-green-500 e-caption'}>1</Text>
                   </Block>
                  </Text>
                 </ListItem>
                </List>

                <Block className={''}>
                  <Text type={'h2'} classes={'e-text-center e-body2 e-text-uppercase e-margin-top-15'}> Room info </Text>
                  <Block classes={'align-row padding-row'}>
                    <Text type={'p'} classes={'e-text-left e-body1'}><b>Room Type</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-light-green-500 e-body1'}><b>Selected by hotel</b></Text>
                  </Block>
                  <Block classes={'align-row padding-row'}>
                    <Text type={'p'} classes={'e-text-left e-body1'}><b>Room</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-light-green-500 e-body1'}><b>3 Nights = $2016</b></Text>
                  </Block>
                  <Block classes={'align-row padding-row border-b'}>
                    <Text type={'p'} classes={'e-text-left e-body1'}><b>Taxes</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-light-green-500 e-body1'}><b>$45</b></Text>
                  </Block>
                  <Block classes={'align-row padding-15 e-background-grey-100 border-b'}>
                    <Text type={'p'} classes={'e-text-left e-body1'}><b>Total</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-light-green-500 e-body1'}><b>$2061</b></Text>
                  </Block>

                  <Text type={'h2'} classes={'e-text-center e-body2 e-text-uppercase e-margin-top-15'}> Guest info </Text>
                  <Block className={'padding-row flex wrap'}>
                    <Input type={'text'} name={'label'} placeholder={'Mr.Smith'} className={'full-w'}/>
                    <Input type={'text'} name={'label'} placeholder={'John'} className={'full-w'}/>
                    <Input type={'text'} name={'label'} placeholder={'+44 125 2541 25'} className={'full-w'}/>
                    <Input type={'email'} name={'label'} placeholder={'jsmith@email.ue'} className={'full-w'}/>
                    <Input type={'text'} name={'label'} placeholder={'Voucher Code'} className={'full-w'}/>
                    <Link to="/content/payment">
                      <Btn label={'Continue order'} ripple={true} type={'submit'} className={'flat e-button e-background-light-green-500 e-text-grey-100 full-w e-no-margin e-margin-bottom-15'} />
                    </Link>
                  </Block>
                </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloInfo;
