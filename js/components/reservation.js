import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem} from 'react-essence';

class HotelloReservation extends React.Component {

    render() {
        return (
          <Block classes={'hotello-reservation'}>
            <Block classes={'reservation-item e-align-row e-border-bottom'}>
              <Block classes={'reservation-no e-background-grey-200'}>
                <Text type={'p'} classes={'e-text-center e-caption e-text-amber-800 e-text-uppercase'}>
                  Order
                </Text>
                <Text type={'p'} classes={'e-text-center e-text-amber-800 e-caption'}>
                  1238740
                </Text>
              </Block>
              <Block classes={'e-align-column e-space-between e-nowrap e-stretch'}>
                <Text type={'h2'} classes={'e-text-black e-headline'}>
                  Pear Tree Hotel
                </Text>
                <Text>
                  <Text type={'span'} classes={'e-text-black e-caption'}>
                    CHECK IN: 03 JUNE 2015 - 06 JUNE 2015
                  </Text>
                  <Text type={'span'} classes={'e-text-amber-800 e-caption'}>
                    (3 NIGHTS)
                  </Text>
                </Text>
                <Text type={'p'} classes={'e-text-amber-800 e-caption e-text-uppercase'}>
                  Awaiting Payment Confirmation
                </Text>
              </Block>
              <Block>
                <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} className={'flat e-background-white'} />
              </Block>
            </Block>
            <Block classes={'reservation-item e-align-row e-border-bottom'}>
              <Block classes={'reservation-no e-background-grey-200'}>
                <Text type={'p'} classes={'e-text-center e-caption e-text-amber-800 e-text-uppercase'}>
                  Order
                </Text>
                <Text type={'p'} classes={'e-text-center e-text-amber-800 e-caption'}>
                  1238740
                </Text>
              </Block>
              <Block classes={'e-align-column e-space-between e-nowrap e-stretch'}>
                <Text type={'h2'} classes={'e-text-black e-headline'}>
                  Hilton Hotel & Resort
                </Text>
                <Text>
                  <Text type={'span'} classes={'e-text-black e-caption'}>
                    CHECK IN: 03 JUNE 2015 - 06 JUNE 2015
                  </Text>
                  <Text type={'span'} classes={'e-text-amber-800 e-caption'}>
                    (3 NIGHTS)
                  </Text>
                </Text>
                <Text type={'p'} classes={'e-text-blue-600 e-caption e-text-uppercase'}>
                  Order Successfull
                </Text>
              </Block>
              <Block>
                <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} className={'flat e-background-white'} />
              </Block>
            </Block>
            <Block classes={'reservation-item e-align-row e-space-between e-border-bottom'}>
              <Block classes={'e-align-column e-space-between e-nowrap e-stretch'}>
                <Text type={'h2'} classes={'e-text-black e-headline'}>
                  Aston San Francisco
                </Text>
                <Text>
                  <Text type={'span'} classes={'e-text-black e-caption'}>
                    CHECK IN: 03 JUNE 2015 - 06 JUNE 2015
                  </Text>
                  <Text type={'span'} classes={'e-text-amber-800 e-caption'}>
                    (3 NIGHTS)
                  </Text>
                </Text>
                <Text type={'p'} classes={'e-text-amber-800 e-caption e-text-uppercase'}>
                  Awaiting Payment Confirmation
                </Text>
              </Block>
              <Block>
                <Btn icon={'navigation-close'} ripple={true} className={'flat delete-btn'} />
              </Block>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloReservation;
