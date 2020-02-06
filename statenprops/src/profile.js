import React from 'react';

class Profile extends React.Component {
    render(){
        const style = {
            padding: '10px',
            border: '1px solid green',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            color: '#4db1e8',
            textAlign: 'center',
            fontFamily: 'sans-serif'
        }

        return(
            <div style={style}>
                <img src={this.props.logo_url} alt="" height="240px"/>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Profile;