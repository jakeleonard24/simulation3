import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import me from '../../me.png'

class Search extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            friendsList: [],
            input: ''
        }
    }

    componentDidMount(){console.log('hi')
    axios.get('http://localhost:3535/api/friend/list').then(response => {
         this.setState({
             friendsList: response.data
         })
         
     })
 }

//  filterArray(input){
//     this.setState({
//       friendsList: [...this.state.friendsList.filter((word) => {
//         return word.startsWith === this.state.input
//       })]
//     })
//   }

    render() {

        var friends = this.state.friendsList
        .filter((friend) => {
            var userInput = this.state.input.toLowerCase();
            var firstName = friend.first_name.toLowerCase();
            var lastName = friend.last_name.toLowerCase();

            return firstName.startsWith(userInput) || lastName.startsWith(userInput)
        })
        .map((friends) => {
            return (
                <div className='innerfriends' >                              
                    <div><img src={me} />
                    {friends.first_name + ' ' + friends.last_name}</div>                  
            </div>
                   
               )
           })

        return (
            <div>
                 {/* <Link to='/dashboard'>
                <div>HELO</div>
                </Link>
                <Link to='/search'>
                    <div>SEARCH</div>
                </Link>
                     <p>SEARCH</p>
                <Link to='/'>
                    <div>logout</div>
                </Link> */}

                <div className='navbar' >
                    <ul className='flexbox-nav' >
                     <li><div>HELO</div></li>
                     <Link to="/dashboard">
                     <li>Home</li>
                     </Link>

                    <li><Link to='/search'>Search</Link></li>
                     <li><p>dashboard</p></li>
                    <li><Link to='/'><div>logout</div></Link></li>
                    </ul>
                </div>

                <div className="search">

                <input onChange={(e) => {
                    this.setState({
                        input: e.target.value
                    })
                }}  placeholder="search"></input>
                </div>
                {/* <button onClick={() => {this.filterArray(this.state.input)}} >Search</button> */}

                {friends}

            </div>
        );
    }
}



export default Search;
