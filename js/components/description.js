import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';


import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Icon, Tab, Divider, Toast, Image} from 'react-essence';

var tabs = {
 'header': [
   { 'context': (<Text classes={'e-text-grey-900 e-text-uppercase'}>Review</Text>) },
   { 'context': (<Text classes={'e-text-grey-900 e-text-uppercase'}>Photo</Text>) },
   { 'context': (<Text classes={'e-text-grey-900 e-text-uppercase'}>Nearby</Text>) }
  ],
  'rows': [
   (<Block classes={'e-text-center review'}>
      <Block classes={'e-text-center padding-tb-10'}>
        <Text type={'p'} classes={'e-text-grey-900 e-title e-text-uppercase'}>Hotel Description</Text>
        <Text type={'p'} classes={'e-text-grey-900 e-body1'}>
          The best cure for worry, depression, melancholy, brooding, is to go deliberately forth and try to lift, with sympathy, the gloom of somebody else.
        </Text>
      </Block>
      <Divider classes={'thinnest e-background-grey-300'} />
      <Block classes={'e-text-center'}>
        <Text type={'p'} classes={'e-text-grey-900 e-title e-text-uppercase'}>Hotel Facilities</Text>
      </Block>
      <Block classes={'e-background-grey-100 e-align-row e-space-around facilities padding-tb-10'}>
        <Block>
          <Icon name={"maps-local-hotel"} className={"e-text-grey-900"} />
          <Text type={'p'} classes={'e-text-grey-900 e-caption e-text-uppercase'}>Room Services</Text>
        </Block>
        <Block>
          <Icon name={"device-network-wifi"} className={"e-text-grey-900"} />
          <Text type={'p'} classes={'e-text-grey-900 e-caption e-text-uppercase'}>WiFi Access</Text>
        </Block>
        <Block>
          <Icon name={"maps-satellite"} className={"e-text-grey-900"} />
          <Text type={'p'} classes={'e-text-grey-900 e-caption e-text-uppercase'}>Air Conditioner</Text>
        </Block>
        <Block>
          <Icon name={"image-timer"} className={"e-text-grey-900"} />
          <Text type={'p'} classes={'e-text-grey-900 e-caption e-text-uppercase'}>24 Hours Reception</Text>
        </Block>
        <Block>
          <Icon name={"maps-directions-walk"} className={"e-text-grey-900"} />
          <Text type={'p'} classes={'e-text-grey-900 e-caption e-text-uppercase'}>Swimming Pool</Text>
        </Block>
      </Block>
      <Block classes={'e-text-center padding-tb-10'}>
        <Text type={'p'} classes={'e-text-grey-900 e-title e-text-uppercase'}>Map</Text>
        <Image src={'../assets/img/map.png'} classes={'e-img-rsp'}/>
      </Block>
   </Block>
   ),
   (<Block classes={'photos'}>
      <Block classes={'thumb'}>
        <Image src={'../assets/img/thumb1.jpg'} classes={'e-img-rsp'}/>
      </Block>
      <Block classes={'thumb'}>
        <Image src={'../assets/img/thumb2.jpg'} classes={'e-img-rsp'}/>
      </Block>
      <Block classes={'thumb'}>
        <Image src={'../assets/img/thumb3.jpg'} classes={'e-img-rsp'}/>
      </Block>
      <Block classes={'thumb'}>
        <Image src={'../assets/img/thumb4.jpg'} classes={'e-img-rsp'}/>
      </Block>
      <Block classes={'thumb'}>
        <Image src={'../assets/img/thumb5.jpg'} classes={'e-img-rsp'}/>
      </Block>
      <Block classes={'thumb'}>
        <Image src={'../assets/img/thumb6.jpg'} classes={'e-img-rsp'}/>
      </Block>
   </Block>
   ),
   (<Block classes={'paypal e-align-column e-text-center'}>

   </Block>
   )
 ]
};


class HotelloDescription extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
      delay: 2000,
      visible: false,
      message: 'Added to favorites!',
            classes: ClassNames(
                this.props.classes,
                this.props.className
            )
        };
    }

    toastStarted() {
      {/* console.log('toast started'); */}
    }

    toastPaused() {
      {/* console.log('toast paused'); */}
    }

    toastResumed() {
      {/* console.log('toast resumed'); */}
    }

    toastEnded() {
      {/* console.log('toast ended'); */}
      this.setState({
            visible: false
        });
    }

    showToast() {
        this.setState({
            visible: true
        });
    }

      render() {
        return (
          <Block classes={'hotello-description'}>
            <Block classes={'bg-big e-flex-container e-align-column e-space-between'}>
              <Block classes={'e-align-row e-space-between'}>
                <Block>
                  <Link to="/content/browser">
                    <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} type={'fab-mini'} className={'fab-mini btn-adjust e-text-grey-100'} />
                  </Link>
                </Block>
                <Block>
                  <Text type={'h3'} classes={'e-text-grey-100 e-title'}>Hilton Hotel & Resort</Text>
                  <Block className={'e-text-left'}>
                    <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                    <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                    <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                    <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                    <Icon name={"action-star-rate"} className={"e-text-yellow-700 inline"} />
                  </Block>
                </Block>
                <Block>
                  <Btn icon={'action-favorite'} onClick={this.showToast.bind(this)} ripple={true} type={'fab-mini'} className={'fab-mini btn-adjust e-text-grey-100'} />
                </Block>
                <Toast
                  delay={this.state.delay}
                  classes={'e-text-white'}
                  visible={this.state.visible}
                  onStart={this.toastStarted.bind(this)}
                  onPause={this.toastPaused.bind(this)}
                  onResume={this.toastResumed.bind(this)}
                  onEnd={this.toastEnded.bind(this)} >
                  {this.state.message}
                </Toast>
              </Block>
              <Block classes={'img-overlay e-background-grey-900 e-align-row e-space-around e-align-center'}>
                <Block classes={'e-align-column'}>
                  <Text type={'h3'} classes={'e-title e-text-lime-800'}>85/100</Text>
                  <Text type={'p'} classes={'e-text-grey-100 e-body1'}>Love this</Text>
                </Block>
                <Block>
                  <Icon name={"communication-location-on"} className={"e-text-grey-100 inline"} />
                  <Text type={'p'} classes={'e-text-grey-100 e-subhead inline'}>2310 Fulton Street,</Text>
                  <Text type={'p'} classes={'e-text-grey-100 e-subhead'}>San Francisco, California</Text>
                </Block>
              </Block>
            </Block>
            <Block>
              <Tab
                data={tabs}
                classes={'e-background-grey-100 e-text-grey-50'}
                indicator={'e-background-lime-600'}/>
            </Block>
            <Block classes={'e-align-row e-space-around'}>
              <Block classes={'e-align-center'}>
                <Text type={'span'} classes={'e-text-grey-300 e-subhead e-line-through inline'}>$ 1,098</Text>
                <Text type={'span'} classes={'e-text-blue-600 e-headline inline'}>$ 765</Text>
                <Text type={'p'} classes={'e-text-black e-subhead e-text-uppercase'}>Avg / Night</Text>
              </Block>
              <Link to="/content/info">
                <Btn label={'Booking Now'} ripple={true} type={'succes'} className={'flat e-background-light-green-500'} />
              </Link>
            </Block>
          </Block>
        );
    }
}

module.exports = HotelloDescription;
