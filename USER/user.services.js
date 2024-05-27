import { executeQuery } from "../config/database.js";

export const findUser = async (email) => {
    try{
        const query = `SELECT * FROM users WHERE email = ?`;
        const users = await executeQuery (query, [email]);
        return users;
    }catch(error) {
        console.log('error finding user', error);
    }
}

export const createUser = async (email, password,name) => {
    try {
        const query = `INSERT INTO Users (email, password,name) VALUES (?, ?,?)`;
        const result = await executeQuery(query, [email,password,name]);
    return result;
    } catch (error) {
        console.log('Error creating user', error);

    }}
    export const getUsers = async () => {
        try {
            const query = `select * from users `;
            const result = await executeQuery(query,[]);
        return result;
        } catch (error) {
            console.log('Error getting Users', error);
    
        }
    }
   