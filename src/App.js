import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Layout/Header';
import About from './Component/Pages/About';
import NotFound from './Component/Pages/NotFound';
import Contacts from './Component/Contacts/Contacts';
import AddContacts from './Component/Contacts/AddContacts';
import EditContacts from './Component/Contacts/EditContacts';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts}/>
                                <Route exact path="/contact/add" component={AddContacts}/>
                                <Route exact path="/contact/edit/:id" component={EditContacts}/>
                                <Route exact path="/about" component={About}/>
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}


export default App;