
import { executeQuery} from "../config/database.js";

export const createTransferTable = async() => {
    try{
        const query = `CREATE TABLE IF NOT EXISTS Transfers (
            id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
            walletId  INT NOT NULL,
            amount DECIMAL NOT NULL,
            currency VARCHAR(3) CHECK (currency IN ('USD', 'NGN')) NOT NULL,
            FOREIGN KEY(walletId) REFERENCES wallets(id),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

        await executeQuery(query, []);
        console.log('Transfer table created successfully');
    } 
    catch(error)
    {
        console.log('Error creating Transfer table', error);
    }


}