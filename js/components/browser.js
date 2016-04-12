import React from 'react';
import ClassNames from 'classnames';

import {Block,
        Divider,
        Icon,
        Image,
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
                <Icon name={"action-visibility"} className={"e-text-grey-100 e-title icon-look e-background-light-green-500"} />
                <Icon name={"action-search"} className={"e-text-grey-100 e-title icon-look"} />
                <Icon name={"maps-local-offer"} className={"e-text-grey-100 e-title icon-look"} />
                <Icon name={"action-account-circle"} className={"e-text-grey-100 e-title icon-look"} />
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
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloBrowser;
