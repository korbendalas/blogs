import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';
class UserHeader extends React.Component{

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render(){
//.find() is array built in method. Like a map()
//when the conditions are matched, its stops with iteration

      //  const user = this.props.users.find(userr=>userr.id===this.props.userId);
        
        //first load up its going to be empty
        if(!this.props.user) {return null};
       
        return( <div className="header">{this.props.user.name}</div>);
    }; 

};
//ownProps  2. default arg 
const mapStateToProps=(state,ownProps)=>{
   // console.log(state.users);
   return {user: state.users.find(user=>user.id===ownProps.userId)};
}
export default connect(mapStateToProps, {fetchUser:fetchUser})(UserHeader);