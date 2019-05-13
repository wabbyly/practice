import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            contacts: props.listContact
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }

    addContact(event) {
        event.preventDefault();//如果不写这句 页面会一直render
        const name = this.refs.name.value;
        const phone = this.refs.phone.value;
        const id = Math.floor((Math.random() * 100) + 1);
        this.setState({
            contacts: this.state.contacts.concat({id, name, phone})
            //concat会建立一个新的array来存储信息 用push不行
        })
        this.refs.name.value = '';
        this.refs.phone.value = '';
    }
    render() {
        const filteredContacts = this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div>
                <input type = "type"
                       placeholder = "Search"
                       value = {this.state.search}
                       onChange = {this.updateSearch.bind(this)} />
                <form onSubmit = {this.addContact.bind(this)}>
                    <input type = "text" ref = "name" />
                    <input type = "text" ref = "phone" />
                    <button type = "submit">Add New Contact</button>
                </form>
                <ul>
                    {filteredContacts.map((contact) => {
                        return <Contact contact = {contact} key = {contact.id} />
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactsList;