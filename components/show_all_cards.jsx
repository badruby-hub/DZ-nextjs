import { useEffect, useState } from "react";
import styles from "@/styles/header.module.css";
const columnConfig = [
    { key: 'name', label: 'Имя' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Номер' },
    { key: 'address', label: 'Адрес' },
];

export function GetUser() {
    const
    [user, setUser] = useState(null),
    [error, setError] = useState(null);
    useEffect(()=>{
     async function fetchUser() {
        try {
            setError(null);
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!res.ok) throw (new Error(res.status));
            const us = await res.json();  
            setUser(us);
        } catch (err) {
            setError(err)
        }
        
     };
     fetchUser();
    },[]);
    if(error){
     return <div className="error">Error: {error.toString()}</div>
    }
    if(!user){
    return <div className="spinner">loading...</div>
    }
    return  <>
    <table>
         <thead>
         <tr>
                        {columnConfig.map((col) => (
                            <th key={col.key}>{col.label}</th>
                        ))}
                    </tr>
         </thead>
         <tbody>
         {user.map(users => 
            (<tr className="user-info" key={users.id}>
             {columnConfig.map((col) => (
        <td key={col.key}>
             {col.key === 'address' ? users.address.city : users[col.key]}
        </td>))}
           </tr>))}
        </tbody>
        </table>
</> 
}



export function ParentDZ() {
   const [checked, setChecked] = useState(false),
    [props, setProps] = useState(1);
    return<>
    <div className="btn-checked">
       <button onClick={()=>setChecked(prev => !prev)}>{ checked ? 'Скрыть пользователей' : 'Показать пользователей'}</button> 
       </div>
       <div className="container">
        {!checked && <h1 className={styles.zagalovok}>Скрытые пользователи</h1>}
        {checked && <GetUser id={props}/>}
        </div>
    
    </>
}

