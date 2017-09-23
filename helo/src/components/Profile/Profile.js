import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import me from '../../me.png'
import './Profile.css'

class Profile extends Component {
    constructor(){
        super()

        this.state = {
            username:'',
            firstName: '',
            lastName:'',
            gender:'',
            hairColor: '',
            eyeColor: '',
            hobby: '',
            birthdayDay: '',
            birthdayMonth:'',
            birthdayYear:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3535/api/user').then(response => {
            this.setState({
                username: response.data.email
            })
            
        })
    }

    render() {
        return (
            <div>
                {/* <Link to='/dashboard'>
                <div>HELO</div>
                </Link>
                <Link to='/search'>
                    <div>SEARCH</div>
                </Link>
                     <p>Profile</p>
                <Link to='/'>
                    <div>logout</div>
                </Link> */}

                <div className='navbar' >
                    <ul className='flexbox-nav' >
                    <Link to='/dashboard'>
                     <li><div>HELO</div></li>
                     </Link>
                     <li>Home</li>
                    <li><Link to='/search'>Search</Link></li>
                     <li><p>Profile</p></li>
                    <li><Link to='/'><div>logout</div></Link></li>
                    </ul>
                </div>

                <div className='user'><img className='robo-border' src={me} />
                <p>{this.state.firstName + ' ' + this.state.lastName}</p>
                    <a><button className='update-button'>Update</button></a>
                    <a><button className='cancel-button'>Cancel</button></a>
                </div>

                <div className="scrollboxes">

           
                <br></br>
                <input onChange={(e) => this.setState({firstName: e.target.value})} placeholder="first name"></input>
                <input onChange={(e) => this.setState({lastName: e.target.value})} placeholder="last name"></input>
                <br></br>
                <select>
                <option value="" disabled selected>Gender</option>
                    <option onClick={()=> {this.setState({gender:"Male"})}} value="Male">Male</option>
                    <option onClick={()=> {this.setState({gender:"Female"})}} value="Female">Female</option>
                </select>

                <select>
                    <option value="" disabled selected>Hair Color</option>
                    <option onClick={()=> {this.setState({hairColor:"Brown"})}} value="Brown">Brown</option>
                    <option onClick={()=> {this.setState({hairColor:"Black"})}} value="Black">Black</option>
                    <option onClick={()=> {this.setState({hairColor:"Blonde"})}} value="Blonde">Blonde</option>
                    <option onClick={()=> {this.setState({hairColor:"Red"})}} value="Red">Red</option>
                </select>

                <select>
                <option value="" disabled selected>Eye Color</option>
                    <option onClick={()=> {this.setState({eyeColor:"Brown"})}} value="Brown">Brown</option>
                    <option onClick={()=> {this.setState({hairColor:"Black"})}} value="Black">Black</option>
                    <option onClick={()=> {this.setState({hairColor:"Blue"})}} value="Blue">Blue</option>
                    <option onClick={()=> {this.setState({hairColor:"Green"})}} value="Green">Green</option>
                </select>

                <select>
                <option value="" disabled selected>Hobby</option>
                    <option onClick={()=> {this.setState({hobby:"Sports"})}} value="Sports">Sports</option>
                    <option onClick={()=> {this.setState({hobby:"Video Games"})}} value="Video Games">Video Games</option>
                    <option onClick={()=> {this.setState({hobby:"Pets"})}} value="Pets">Pets</option>
                    <option onClick={()=> {this.setState({hobby:"Reading"})}} value="Reading">Reading</option>
                </select>

                <select>
                <option value="" disabled selected>Birthday Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>

                <select>
                <option value="" disabled selected>Birthday Month</option>
                    <option value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>

                <select>
                <option value="" disabled selected>Birthday Year</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                </select>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        
    }
}

export default Profile;
// connect(mapStateToProps, {})(Private);