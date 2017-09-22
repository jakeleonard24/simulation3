import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <div>
                     <div>HELO</div>
                <Link to='/search'>
                    <div>SEARCH</div>
                </Link>
                     <p>dashboard</p>
                <Link to='/'>
                    <div>logout</div>
                </Link>
                </div>
           <Link to='/profile'>
            <button>Edit Profile</button>
           </Link>     


            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        
    }
}

export default Dashboard;
// connect(mapStateToProps, {})(Private);