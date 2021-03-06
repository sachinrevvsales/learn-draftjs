import React, {Component} from 'react';

import PageContainer from '../PageContainer';

import MarkdownFileRenderer from '../MarkdownFileRenderer';
import readmeFile from './README.md';

export default class Questions extends Component {
	render() {
		return (
			<PageContainer {...this.props}>
				<MarkdownFileRenderer mdFileURL={readmeFile}/>
			</PageContainer>
		);
	}
}
