import React,{ Component } from 'react';
import User from './User';

class Users extends Component{
    state ={
        users:[
            {name:"virat",age:30},
            {name:"root",age:33},
            {name:"smith",age:25},
            {name:"ross",age:34},
        ],
        title:"Users List"
    };
    
    makeMeYounger =  () =>{
        debugger;
        const newState =this.state.users.map(
            (user)=>{
                const tempUser=user;
                tempUser.age-=10;
                return tempUser;
        });

        this.setState({
            newState
        });
    }
    
    render( ){
        return(<div>
            <button onClick={this.makeMeYounger }>Make Us 10 Year Younger</button>
            <br/>
            <h1>{this.state.title}</h1>
            {
            this.state.users.map((user)=>{
                return <User age={user.age}>{user.name}</User>
            })
         }
        </div>)  
        
        
}
}
export default Users;