import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import axios from 'axios';
import './Dashboard.css'

class Dashboard extends Component {
    constructor(){
        super()
       
        this.state = {
            friendsList: []
        }
    }

    componentDidMount(){console.log('hi')
       axios.get('http://localhost:3535/api/friend/list').then(response => {
            this.setState({
                friendsList: response.data
            })
            
        })
    }
    render() {
        console.log(this.state.friendsList)
        var friends = this.state.friendsList.map(function(friends){
         if(friends.id <= 20) return (
               <div>
                   
                    <div>{friends.first_name + ' ' + friends.last_name}</div>
                    
               </div>
                
            )
        })

        return (
           

            <div>

               <div className='navbar' >
                    <ul className='flexbox-nav' >
                     <li><div>HELO</div></li>
                     <li>Home</li>
                    <li><Link to='/search'><img />Search</Link></li>
                     <li><p>dashboard</p></li>
                    <li><Link to='/'><div>logout</div></Link></li>
                    </ul>
                </div>

          <Link to='/profile'>
            <button>Edit Profile</button>
           </Link>    


           </div>
        )
    }
}

function mapStateToProps(state){
    return{
        
    }
}

export default Dashboard;
// connect(mapStateToProps, {})(Private);