var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
				<div>Hello World! Moar New Stuff!</div>
				<span>{this.props.name}</span>
				<FriendsContainer name={this.props.name}/>
			</div>
		)
	}
});

var FriendsContainer = React.createClass({
	render: function() {
		var friends = ['Dave Gordon', 'Toggsy', 'Bru']
		return (
			<div>
				<h3>Name: {this.props.name}</h3>
				<ShowList names={friends} />
			</div>
		)
	}
});

var ShowList = React.createClass({
	render: function() {
		var listItems = this.props.names.map(function(friend){
			return <li key={friend}> {friend} </li>;
		});
		return (
			<div>
				<h3> Friends </h3>
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
});
ReactDOM.render(<HelloWorld name="Greg"/>, document.getElementById('app'));
