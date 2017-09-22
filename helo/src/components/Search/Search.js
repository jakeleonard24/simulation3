import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Search extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                 <Link to='/dashboard'>
                <div>HELO</div>
                </Link>
                <Link to='/search'>
                    <div>SEARCH</div>
                </Link>
                     <p>SEARCH</p>
                <Link to='/'>
                    <div>logout</div>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        
    }
}

export default Search;
// connect(mapStateToProps, {})(Private);