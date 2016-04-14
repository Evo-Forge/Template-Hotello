import React from 'react';
import ClassNames from 'classnames';

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

      var tabs = {
        'header': [
          { 'context': (<Text classes={'e-text-uppercase'}>Best Rating</Text>) },
          { 'context': (<Text classes={'e-text-uppercase'}>Promo Only</Text>) }
        ],
        'rows': [
          (<Block>
            <Block classes={'bg-pear align-row padding-row'}>
              <Block classes={'brick-75'}>
                <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title '}>Pear Tree Hotel</Text>
                <Block className={'e-text-left'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                </Block>
                <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption'}>RATING: 85 din 100</Text>
              </Block>
              <Block classes={'brick-25'}>
                <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title'}><b>$679</b></Text>
                <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
              </Block>
            </Block>

            <Block classes={'bg-apple flex'}>
              <Block>
                <Block className={'e-text-center'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                </Block>
                <Text type={'p'} classes={'e-text-center e-text-grey-200 e-caption'}>RATING: 85 din 100</Text>
                <Text type={'h2'} classes={'e-text-center e-text-grey-100 e-title margin-top-15'}>Apple Tree Hotel</Text>
                <Text type={'p'} classes={'e-text-center e-text-grey-100 e-title'}><b>$1,289</b></Text>
                <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
              </Block>
            </Block>

            <Block classes={'bg-apricot align-row padding-row'}>
              <Block classes={'brick-75'}>
                <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title '}>Apricot Tree Hotel</Text>
                <Block className={'e-text-left'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                </Block>
                <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption'}>RATING: 85 din 100</Text>
              </Block>
              <Block classes={'brick-25'}>
                <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title'}><b>$1,000</b></Text>
                <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
              </Block>
            </Block>

            <Block classes={'bg-peach align-row padding-row'}>
              <Block classes={'brick-75'}>
                <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title'}>Peach Tree Hotel</Text>
                <Block className={'e-text-left'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                </Block>
                <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption'}>RATING: 85 din 100</Text>
              </Block>
              <Block classes={'brick-25'}>
                <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title'}><b>$889</b></Text>
                <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
              </Block>
            </Block>

            <Block classes={'bg-plum align-row padding-row'}>
              <Block classes={'brick-75'}>
                <Text type={'h2'} classes={'e-text-left e-text-grey-100 e-title'}>Plum Tree Hotel</Text>
                <Block className={'e-text-left'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                </Block>
                <Text type={'p'} classes={'e-text-left e-text-grey-200 e-caption'}>RATING: 85 din 100</Text>
              </Block>
              <Block classes={'brick-25'}>
                <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title'}><b>$654</b></Text>
                <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
              </Block>
            </Block>
          </Block>),
          (<Block>
            <Block className={'flex wrap'}>
              <Block classes={'half-w bg-apple'}>
                <Block className={'procent centered-pr'}>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>85</Text>
                  <Divider classes={'thin e-background-grey-100 no-margin'} />
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>100</Text>
                </Block>
                <Block className={'e-text-center'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                </Block>
                <Text type={'h2'} classes={'e-text-center e-text-grey-100 e-title margin-top-15'}>Apple Tree Hotel</Text>
                <Block className={'align-row stretched'}>
                  <Block classes={'brick-25 e-background-yellow-700 padding-col'}>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-body1'}><b>30%</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>OFF  </Text>
                  </Block>
                  <Block classes={'brick-75 e-background-light-green-500 e-text-right padding-col'}>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption inline discount'}>$1289 </Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title inline'}> $654</Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>
              </Block>

              <Block classes={'half-w bg-pear'}>
                <Block className={'procent centered-pr'}>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>90</Text>
                  <Divider classes={'thin e-background-grey-100 no-margin'} />
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>100</Text>
                </Block>
                <Block className={'e-text-center'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                </Block>
                <Text type={'h2'} classes={'e-text-center e-text-grey-100 e-title margin-top-15'}>Pear Tree Hotel</Text>
                <Block className={'align-row stretched'}>
                  <Block classes={'brick-25 e-background-yellow-700 padding-col'}>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-body1'}><b>40%</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>OFF  </Text>
                  </Block>
                  <Block classes={'brick-75 e-background-light-green-500 e-text-right padding-col'}>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption inline discount'}>$678 </Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title inline'}> $495</Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>
              </Block>

              <Block classes={'half-w bg-plum'}>
                <Block className={'procent centered-pr'}>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>90</Text>
                  <Divider classes={'thin e-background-grey-100 no-margin'} />
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>100</Text>
                </Block>
                <Block className={'e-text-center'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                </Block>
                <Text type={'h2'} classes={'e-text-center e-text-grey-100 e-title margin-top-15'}>Plum Tree Hotel</Text>
                <Block className={'align-row stretched'}>
                  <Block classes={'brick-25 e-background-yellow-700 padding-col'}>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-body1'}><b>40%</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>OFF  </Text>
                  </Block>
                  <Block classes={'brick-75 e-background-light-green-500 e-text-right padding-col'}>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption inline discount'}>$1000 </Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title inline'}> $600</Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>
              </Block>

              <Block classes={'half-w bg-peach'}>
                <Block className={'procent centered-pr'}>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>90</Text>
                  <Divider classes={'thin e-background-grey-100 no-margin'} />
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-100'}>100</Text>
                </Block>
                <Block className={'e-text-center'}>
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                  <Icon name={"action-star-rate"} className={"e-text-yellow-100 inline"} />
                </Block>
                <Text type={'h2'} classes={'e-text-center e-text-grey-100 e-title margin-top-15'}>Peach Tree Hotel</Text>
                <Block className={'align-row stretched'}>
                  <Block classes={'brick-25 e-background-yellow-700 padding-col'}>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-body1'}><b>40%</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>OFF  </Text>
                  </Block>
                  <Block classes={'brick-75 e-background-light-green-500 e-text-right padding-col'}>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption inline discount'}>$899 </Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-title inline'}> $587</Text>
                    <Text type={'p'} classes={'e-text-right e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>
              </Block>

              <Block className={'e-background-blue-grey-800 full-w e-text-center align-row padding-row'}>
                <Text type={'a'} classes={'e-text-center e-body1 icon-look e-background-light-green-500'}>
                  <Icon name={"action-visibility"} className={"e-text-grey-100 e-title"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-body1 icon-look'}>
                  <Icon name={"action-search"} className={"e-text-grey-100 e-title"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-body1 icon-look'}>
                  <Icon name={"maps-local-offer"} className={"e-text-grey-100 e-title"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-body1 icon-look'}>
                  <Icon name={"action-account-circle"} className={"e-text-grey-100 e-title"} />
                </Text>
              </Block>
            </Block>
          </Block>)
        ]
      };

class HotelloBrowser extends React.Component {
    render() {
        return (
          <Block>
            <Block classes={'HotelloBrowser'}>
              <Block classes={'e-background-light-green-500 logo flex'} >
                <Block className={'e-text-center'}>
                  <Image src={'assets/img/call.png'} alt="ringing bell"/>
                  <Text type={'h1'} className={'e-display-2 e-text-grey-100 e-text-uppercase'}>Hotello</Text>
                  <Text type={'p'} className={' e-body1 e-text-grey-100 e-text-uppercase'}>Hotel ticketing app</Text>
                </Block>
              </Block>

              <Block>
                <Tab
                  data={tabs}
                  classes={'e-background-blue-grey-900 e-text-grey-50 tab-look'}
                  indicator={'e-background-blue-grey-200'}/>
              </Block>

              <Block>
                <Block classes={'e-background-blue-grey-900 flex'}>
                  <Text type={'h2'} classes={'e-text-center e-subhead e-text-grey-100'}>Search Result:
                    <Text type={'span'} classes={'e-text-center e-subhead e-text-light-green-500'}> 35 Hotels</Text>
                  </Text>
                </Block>
                <Block className={'padding-15'}>
                  <Block classes={'flex wrap padding-row'}>
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
                    <Btn label={'Search Hotel'} ripple={true} type={'submit'} className={'flat e-button e-background-light-green-500 e-text-grey-100 full-w no-margin margin-top-15'} />
                  </Block>
                </Block>

                <Block classes={'bg-pear flex padding-15'}>
                  <Block classes={'brick-75'}>
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
                  <Block classes={'brick-25'}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$679</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>

                <Block classes={'bg-apricot flex padding-15'}>
                  <Block classes={'brick-75'}>
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
                  <Block classes={'brick-25'}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$1000</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>

                <Block classes={'bg-peach flex padding-15'}>
                  <Block classes={'brick-75'}>
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
                  <Block classes={'brick-25'}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$889</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>

                <Block classes={'bg-plum flex padding-15'}>
                  <Block classes={'brick-75'}>
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
                  <Block classes={'brick-25'}>
                    <Text type={'p'} classes={'e-text-right e-text-light-blue-500 e-title'}><b>$654</b></Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-100 e-caption'}>AVG/NIGHT</Text>
                  </Block>
                </Block>
              </Block>

              <Block>
                <Block classes={'e-background-blue-grey-900 flex start'}>
                  <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-blue-grey-900 e-text-grey-100 icon-close'} />
                  <Block classes={'flex'}>
                    <Image src={'assets/img/call.png'} className={'logo-img padding-col'}/>
                    <Block>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-grey-100'}><b>Barcelona</b></Text>
                      <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-100 margin-t-para'}>15-17 may 2016 &bull; 1 Room</Text>
                    </Block>
                  </Block>
                </Block>

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Text type={'small'} classes={'e-text-center e-text-grey-100 e-caption e-background-orange-700 badge-sell'}> 30% </Text>
                    <Image src={'assets/img/hotel1.jpg'} width={'90px'} height={'100px'} />
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
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline'}>Rating:
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
                        <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 no-margin no-padding'} />
                      </Block>
                    </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 no-margin'} />

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Text type={'small'} classes={'e-text-center e-text-grey-100 e-caption e-background-red-700 badge-sell'}> 50% </Text>
                    <Image src={'assets/img/hotel2.jpg'} width={'90px'} height={'100px'} />
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
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline'}>Rating:
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
                        <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 no-margin no-padding'} />
                      </Block>
                      </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 no-margin'} />

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Image src={'assets/img/hotel3.jpg'} width={'90px'} height={'100px'} />
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
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline'}>Rating:
                        <Text type={'span'} classes={'e-text-left e-text-light-green-500 e-caption'}> 85 din 100</Text>
                      </Text>
                    </Block>

                    <Block className={'align-row full-w margin-r-15'}>
                      <Block classes={''}>
                        <Text type={'p'} classes={'e-text-left e-text-light-blue-500 e-title inline'}> $889</Text>
                        <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption margin-t-para'}>AVG/NIGHT</Text>
                      </Block>
                      <Block classes={''}>
                        <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 no-margin no-padding e-right'} />
                      </Block>
                    </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 no-margin'} />

                <Block classes={'flex'}>
                  <Block classes={'margin-15'}>
                    <Image src={'assets/img/hotel4.jpg'} width={'90px'} height={'100px'} />
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
                      <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption inline'}>Rating:
                        <Text type={'span'} classes={'e-text-left e-text-light-green-500 e-caption'}> 85 din 100</Text>
                      </Text>
                    </Block>

                    <Block className={'align-row full-w margin-r-15'}>
                      <Block classes={''}>
                        <Text type={'p'} classes={'e-text-left e-text-light-blue-500 e-title inline'}> $654</Text>
                        <Text type={'p'} classes={'e-text-left e-text-grey-900 e-caption margin-t-para'}>AVG/NIGHT</Text>
                      </Block>
                      <Block classes={''}>
                        <Btn label={'Book now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500 no-margin no-padding'} />
                      </Block>
                    </Block>
                  </Block>
                </Block>

                <Divider classes={'thin e-background-grey-100 no-margin'} />

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

              <Block>
                <Block classes={'e-background-blue-grey-900 flex start'}>
                  <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-blue-grey-900 e-text-grey-100 icon-close'} />
                  <Image src={'assets/img/call.png'} className={'logo-img padding-col margin-r-15'}/>
                  <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-100 inline'}><b>Book this Hotel</b></Text>
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
                    <Text type={'h2'} classes={'e-text-center e-text-grey-100 e-title margin-top-15'}>Apple Tree Hotel</Text>
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
                  <Text type={'h2'} classes={'e-text-center e-body2 e-text-uppercase margin-top-15'}> Room info </Text>
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

                  <Text type={'h2'} classes={'e-text-center e-body2 e-text-uppercase margin-top-15'}> Guest info </Text>
                  <Block className={'padding-row flex wrap'}>
                    <Input type={'text'} name={'label'} placeholder={'Mr.Smith'} className={'full-w'}/>
                    <Input type={'text'} name={'label'} placeholder={'John'} className={'full-w'}/>
                    <Input type={'text'} name={'label'} placeholder={'+44 125 2541 25'} className={'full-w'}/>
                    <Input type={'email'} name={'label'} placeholder={'jsmith@email.ue'} className={'full-w'}/>
                    <Input type={'text'} name={'label'} placeholder={'Voucher Code'} className={'full-w'}/>
                    <Btn label={'Continue order'} ripple={true} type={'submit'} className={'flat e-button e-background-light-green-500 e-text-grey-100 full-w no-margin'} />
                  </Block>
                </Block>

              </Block>


            </Block>
          </Block>
        );
    }
}

module.exports = HotelloBrowser;
