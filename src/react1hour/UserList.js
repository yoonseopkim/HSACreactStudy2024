import React from 'react';

const User =({userData}) =>{
    return(
        <tr>
            <td>
                {userData.name}
            </td>
            <td>
                {userData.email}
            </td>
        </tr>
    )
}
const UserList = () => {
    const users =[
        {email: 'asd@gmail.com',name: '유재석'},
        {email: 'asd2@gmail.com',name: '김종국'},
        {email: 'asd3@gmail.com',name: '하하'},
        {email: 'asd4@gmail.com',name: '송지효'},
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th>
                        이름
                    </th>
                    <th>
                        이메일
                    </th>

                </tr>
            </thead>
            <tbody>
                {users.map(user=> <User userData={user}/>)} 
            </tbody>
        </table>
    )
}
export default UserList;