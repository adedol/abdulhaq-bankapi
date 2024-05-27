
import { executeQuery} from "../config/database.js";

export const createWithdrawTable = async () =>{
    try{
        const query = `CERATE TABLE IF NOT EXIST Withdraw (
            id INT AUTO_INCREMENT PRIMARY KEY,
            walletId  INT AUTO_INCREMENT PRIMARY KEY ,
            amount DECIMAL NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        await executeQuery(query, []);
        console.log('Wallet table created successfully');
    } catch(error){
        console.log('Error creating Wallet table', error);
    }


}