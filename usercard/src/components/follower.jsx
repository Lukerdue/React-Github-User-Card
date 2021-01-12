import React from 'react';

function Follower(props){
        console.log(props.follower)
        return(
            <div className="followerCard">
                <img src={props.follower.avatar_url}/>
                <p>{props.follower.login}</p>
            </div>
        )
    }
export default Follower