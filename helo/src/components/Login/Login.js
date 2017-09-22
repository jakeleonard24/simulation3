import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


class Login extends Component {

    render() {
        return (
            <div>
                <Link to="/dashboard">
                 <a href={process.env.REACT_APP_LOGIN}><button>Login /Register</button></a>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        
    }
}

export default Login;
//   connect(mapStateToProps, {})();