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


class HotelloResults extends React.Component {
    render() {
        return (
          <Block>
            <Block classes={'hotello-results'}>

                <Block classes={'e-background-blue-grey-900 flex start header-h'}>
                  <Link to="/content/search">
                    <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-blue-grey-900 e-text-grey-100 icon-close e-no-margin'} />
                  </Link>
                  <Block classes={'flex center-header'}>
                    <Image src={'../assets/img/call.png'} className={'logo-img margin-r-15'}/>
                    <Block>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-100'}><b>Barcelona</b></Text>
                      <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-100 margin-t-para'}>15-17 may 2016 &bull; 1 Room</Text>
                    </Block>
                  </Block>
                </Block>

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Text type={'small'} classes={'e-text-center e-text-grey-100 e-caption e-background-orange-700 badge-sell'}> 30% </Text>
                    <Image src={'../assets/img/hotel1.jpg'} width={'90px'} height={'100px'}/>
                  </Block>

                  <Block classes={'flex wrap start'}>
                    <Text type={'p'} classes={'e-text-left e-subhead e-text-blue-grey-900 full-w margin-t-para margin-b-para'}><b>Pear Tree Hotel</b></Text>
                    <Block>
                      <Icon name={"communication-location-on"} className={"e-text-light-green-500"} />
                      <Text type={'span'} classes={'e-text-left e-body1'}>Barcelona</Text>
                    </Block>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline align-para'}>Rating:
                        <Text type={'span'} classes={'e-text-left e-text-light-green-500 e-caption'}> 85 din 100</Text>
                      </Text>
                    </Block>

                    <Block className={'align-row full-w margin-r-15'}>
                      <Block classes={''}>
                        <Text type={'span'} classes={'e-text-left e-text-grey-500 e-caption inline discount'}>$678 </Text>
                        <Text type={'p'} classes={'e-text-left e-text-light-blue-500 e-title inline'}> $495</Text>
                        <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption margin-t-para'}>AVG/NIGHT</Text>
                      </Block>
                      <Block classes={''}>
                        <Link to="/content/description">
                          <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 e-no-margin e-no-padding'} />
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 e-no-margin'} />

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Text type={'small'} classes={'e-text-center e-text-grey-100 e-caption e-background-red-700 badge-sell'}> 50% </Text>
                    <Image src={'../assets/img/hotel2.jpg'} width={'90px'} height={'100px'} />
                  </Block>
                  <Block classes={'flex wrap start'}>
                    <Text type={'p'} classes={'e-text-left e-subhead e-text-blue-grey-900 full-w margin-t-para margin-b-para'}><b>Apricot Tree Hotel</b></Text>
                    <Block>
                      <Icon name={"communication-location-on"} className={"e-text-light-green-500"} />
                      <Text type={'span'} classes={'e-text-left e-body1'}>Barcelona</Text>
                    </Block>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline align-para'}>Rating:
                        <Text type={'span'} classes={'e-text-left e-text-light-green-500 e-caption'}> 85 din 100</Text>
                      </Text>
                    </Block>

                    <Block className={'align-row full-w margin-r-15'}>
                      <Block classes={''}>
                        <Text type={'span'} classes={'e-text-left e-text-grey-500 e-caption inline discount'}>$1000 </Text>
                        <Text type={'p'} classes={'e-text-left e-text-light-blue-500 e-title inline'}> $500</Text>
                        <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption margin-t-para'}>AVG/NIGHT</Text>
                      </Block>
                      <Block classes={''}>
                        <Link to="/content/description">
                          <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 e-no-margin e-no-padding'} />
                        </Link>
                      </Block>
                      </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 e-no-margin'} />

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Image src={'../assets/img/hotel3.jpg'} width={'90px'} height={'100px'} />
                  </Block>
                  <Block classes={'flex wrap start'}>
                    <Text type={'p'} classes={'e-text-left e-subhead e-text-blue-grey-900 full-w margin-t-para margin-b-para'}><b>Peach Tree Hotel</b></Text>
                    <Block>
                      <Icon name={"communication-location-on"} className={"e-text-light-green-500"} />
                      <Text type={'span'} classes={'e-text-left e-body1'}>Barcelona</Text>
                    </Block>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline align-para'}>Rating:
                        <Text type={'span'} classes={'e-text-left e-text-light-green-500 e-caption'}> 85 din 100</Text>
                      </Text>
                    </Block>

                    <Block className={'align-row full-w margin-r-15'}>
                      <Block classes={''}>
                        <Text type={'p'} classes={'e-text-left e-text-light-blue-500 e-title inline'}> $889</Text>
                        <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption margin-t-para'}>AVG/NIGHT</Text>
                      </Block>
                      <Block classes={''}>
                        <Link to="/content/description">
                          <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 e-no-margin e-no-padding'} />
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 e-no-margin'} />

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Image src={'../assets/img/hotel4.jpg'} width={'90px'} height={'100px'} />
                  </Block>
                  <Block classes={'flex wrap start'}>
                    <Text type={'p'} classes={'e-text-left e-subhead e-text-blue-grey-900 full-w margin-t-para margin-b-para'}><b>Plum Tree Hotel</b></Text>
                    <Block>
                      <Icon name={"communication-location-on"} className={"e-text-light-green-500"} />
                      <Text type={'span'} classes={'e-text-left e-body1'}>Barcelona</Text>
                    </Block>
                    <Block className={'e-text-left'}>
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline align-para'}>Rating:
                        <Text type={'span'} classes={'e-text-left e-text-light-green-500 e-caption'}> 85 din 100</Text>
                      </Text>
                    </Block>

                    <Block className={'align-row full-w margin-r-15'}>
                      <Block classes={''}>
                        <Text type={'p'} classes={'e-text-left e-text-light-blue-500 e-title inline'}> $654</Text>
                        <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption margin-t-para'}>AVG/NIGHT</Text>
                      </Block>
                      <Block classes={''}>
                        <Link to="/content/description">
                          <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 e-no-margin e-no-padding'} />
                        </Link>
                      </Block>
                    </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 e-no-margin'} />

                <Block className={'e-background-blue-grey-100 e-text-center align-row padding-row'}>
                  <Text type={'a'} classes={'e-text-center e-body1 icon-look '}>
                    <Icon name={"action-visibility"} className={"e-text-blue-grey-800 e-title"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-body1 icon-look e-background-light-green-500'}>
                    <Icon name={"action-search"} className={"e-text-grey-100 e-title"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-body1 icon-look'}>
                    <Icon name={"maps-local-offer"} className={"e-text-blue-grey-800 e-title"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-body1 icon-look'}>
                    <Icon name={"action-account-circle"} className={"e-text-blue-grey-800 e-title"} />
                  </Text>
                </Block>

            </Block>
          </Block>
        );
    }
}

module.exports = HotelloResults;
