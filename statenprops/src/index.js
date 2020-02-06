import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './profile'

const App = () => {
    return(
        <Profile logo_url="https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
        title="Mobile App, Web App and API Development and More"/>
    )
}


ReactDOM.render(<App/>, document.querySelector('#root'))