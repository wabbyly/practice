import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';


let contacts = [
    {
        id: 1,
        name: 'Scott',
        phone: '555 333 5555'
    },
    {
        id: 2,
        name: 'Courtney',
        phone: '111 333 3333'
    },
    {
        id: 3,
        name: 'Tim',
        phone: '222 333 444'
    },
    {
        id: 4,
        name: 'Jeff',
        phone: '555 333 1111'
    }]
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList listContact = {this.props.contact}/>
            </div>
        )
    }
}

ReactDOM.render(<App contact = {contacts} />, document.getElementById('app'));

