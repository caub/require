const React = require('react');
const Button = require('./Button');

module.exports = class App extends React.PureComponent {

	render(){
		return <div>
			<Button color={'#abcdef'} text={'Click'} />
		</div>;
	}
}