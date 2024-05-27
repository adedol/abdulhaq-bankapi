
import { executeQuery} from "../config/database.js";

export const createUserTable = async () =>{
    try{
        const query = `CREATE TABLE IF NOT EXISTS Users(
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        await executeQuery(query, []);
        console.log('User table created successfully');
        
    } catch(error){
        console.log('Error creating user table', error);
    }


}
// export const alterUserTable = async () =>{
//     try{
//         const query = `ALTER TABLE Users ADD name VARCHAR(50) NOT NULL`;

//         await executeQuery(query, []);
//         console.log('User table altered successfully');
        
//     } catch(error){
//         console.log('Error altering user table', error);
//     }
// }