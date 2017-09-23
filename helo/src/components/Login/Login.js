import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Login.css'


class Login extends Component {

    render() {
        return (
            <div className="body">

            <div className='flexbox'>
                <div className='login-box'>
                    
                    <a href={'http://localhost:3535/auth' }><button>Login /Register</button></a>
                    
                </div>
            </div>
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