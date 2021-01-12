import React from 'react';
import Follower from './follower';
 
function Followers(props){
    const { followers } = props
        return(
            <div className="followers hidden">
                {followers.map(item=>{
                    return <Follower follower={item} key={Date.now()}/>
                })}
            </div>
        )
    }
export default Followers