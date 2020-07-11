import React from 'react'

const UsersGithub = ({repoUser}) => {
    
    if(repoUser){
        console.log(repoUser)
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Repositorios</th>
                </tr>
                <tr>
                {
                    repoUser &&
                    repoUser.map((item, index) => ( 
                    <tr key = {index}>{item.name}</tr> 
                ))
                }
                </tr>
        </table>
        </div>
    )
}
export default UsersGithub;