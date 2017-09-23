import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import axios from 'axios';
import './Dashboard.css'
import me from '../../me.png'

class Dashboard extends Component {
    constructor(){
        super()
       
        this.state = {
            friendsList: [],
            filter: ''

        }
    }

    componentDidMount(){console.log('hi')
       axios.get('http://localhost:3535/api/friend/list').then(response => {
           console.log(response.data)
            this.setState({
                friendsList: response.data
            })
            
        })
    }
    render() {
        console.log(this.state.filter)
       var friends = this.state.friendsList.filter((friend) => {
            if(this.state.filter === ''){
                return friend
           } else {
          return friend.gender === this.state.filter
           }
               
            
       }).map(function(friends){
         return (
            <div className='innerfriends' >                              
                    <div><img  src={me} />
                    {friends.first_name + ' ' + friends.last_name}</div>                  
            </div>
                
            )
        })

        return (
           

            <div>

               <div className='navbar' >
                    <ul className='flexbox-nav' >
                     <li><div>HELO</div></li>
                     <li>Home</li>
                    <li><Link to='/search'>Search</Link></li>
                     <li><p>dashboard</p></li>
                    <li><Link to='/'><div>logout</div></Link></li>
                    </ul>
                </div>

                <div className='outer-box-welcome' >
                    <div className='my-info' >
                        <Link to='/profile'>
                        <img className='robo-border' src={me} /><button className='cancel-button' >Edit Profile</button>
                        </Link>    
                   </div>
                    <div className='welcome-message' >
                        Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
                    </div>
                </div>
                <h2>Recommended Friends</h2>
             <select>
                <option value="" disabled selected>Filter By</option>
                <option onClick={()=>{this.setState({filter: 'Male'})}} value="Male">Male</option>
                <option onClick={()=>{this.setState({filter: 'Female'})}} value="Female">Female</option>
                
             </select>
               <div className='outerfriend'>{friends}</div>
            

          <Link to='/profile'>
            <button>Edit Profile</button>
           </Link>    
            <br></br>
            

           

           </div>
        )
    }
}


export default Dashboard;
