import React from 'react';
import ClassNames from 'classnames';
import ContentBlock from '../components/contentBlock';
import HotelloHeader from '../components/header';
import { Block } from 'react-essence';
import { Link } from 'react-router';


class HotelloContainer extends React.Component {

  render() {
      return (
        <Block>
          <HotelloHeader/>
          <ContentBlock>
            {this.props.children}
          </ContentBlock>
        </Block>
      );
  }
}

module.exports = HotelloContainer;
