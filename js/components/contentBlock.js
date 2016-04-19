import React from 'react';
import ClassNames from 'classnames';

import { Block} from 'react-essence';

class ContentBlock extends React.Component {

    render() {
        return (
        	<Block>
            {this.props.children}
    			</Block>
        );
    }
}

module.exports = ContentBlock;
