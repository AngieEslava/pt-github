import React from 'react'

const UsersGithub = ({repoUser}) => {
    
    if(repoUser){
        console.log(repoUser)
    }

    return (
        <div>
            
                
                
                {
                    repoUser &&
                    repoUser.map((item, index) => ( 
                    <p key = {index}>{item.name}</p> 
                ))
                }
                
        
        </div>
    )
}
export default UsersGithub;