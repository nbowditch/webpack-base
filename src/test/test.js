var style = require('./style/style.css')

var message = require('./message');
var messageContent = `
	<p class="${style.box}">${message.message} ${message.subject}</p>
`;

import Button from './button';
const buttonContent = `
	<p>${Button.button}</p>
`;

import JpgSample from './jpgSample';
import PngSample from './pngSample';
import GifSample from './gifSample';
const imageContent = `
	<p>${JpgSample}</p>
	<p>${PngSample}</p>
	<p>${GifSample}</p>
`;

import JpgSmallSample from './jpgSmallSample';
import PngSmallSample from './pngSmallSample';
import GifSmallSample from './gifSmallSample';
const dataUrlContent = `
	<p>${JpgSmallSample}</p>
	<p>${PngSmallSample}</p>
	<p>${GifSmallSample}</p>
`;

import { multiply } from './mathStuff';
const a = 3, b = 3;
const mathContent = `
	<p>${a} times ${b} is ${multiply(a, b)}</p>
`;

const buildContent = `
	<p>DEVELOPMENT: ${DEVELOPMENT}</p>
	<p>PRODUCTION: ${PRODUCTION}</p>
`;

const pageLoadContent = `
	<div id="menu">
		<button id="loadPage1">Load Page 1</button>
		<button id="loadPage2">Load Page 2</button>
	</div>
	<div id="loaded-content" class="${style.box}">
		<h1>Home</h1>
	</div>
`;

const Test = {
	content: 
		messageContent +
		buttonContent +
		mathContent +
		buildContent +
		pageLoadContent +
		dataUrlContent +
		imageContent,
	addHandlers: () => {
		Button.attachEl();

		document.getElementById('loadPage1').addEventListener('click', () => {
			System.import('./page1').then(pageModule => {
				document.getElementById('loaded-content').innerHTML = pageModule.default;
			});
		});
		document.getElementById('loadPage2').addEventListener('click', () => {
			System.import('./page2').then(pageModule => {
				document.getElementById('loaded-content').innerHTML = pageModule.default;
			});
		});
	}
}

export default Test;