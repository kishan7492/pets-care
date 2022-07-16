import React from 'react'
import { auth } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const isLoggedIn =(user)=>{
    return user && user.email ? true : false;
}

export const Feed = () =>{
    const [user, loading, error] = useAuthState(auth);

    return(
        <>
        {loading && (
            <h1>Loading ...</h1>
        )}
        { !loading &&(
            <>
            {isLoggedIn(user) ? (
                <h1>Feed here</h1>
            ): (<Navigate to="/signin"/>)}
            </>
        )
        }
        </>
    )
}

export default Feed;
