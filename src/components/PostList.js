import React,{Component} from 'react';
import UserHeader from './UserHeader';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';


class PostList extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }
    render(){
        // console.log(this.props.posts);
    return(
         <div className="ui divided relaxed list"> {
            this.props.posts.map(post=>{   
               // console.log(post.id);  
                return (
                    
                <div className="item" key={post.id}>

                <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                  
                </div>);
            })

         }</div>
   );
    }
};

const mapStateToProps =(state)=>{
// console.log(state);
return {posts: state.postsR};
};

export default connect(mapStateToProps, {fetchPosts:fetchPosts})(PostList);