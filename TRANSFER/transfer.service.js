import { executeQuery } from "../config/database.js";

export const createTransfer = async(walletId,amount,currency) =>{
    try{
        const query = `INSERT INTO transfers (walletId,amount,currency) VALUES(?,?,?)`;
        const values = [walletId,amount,currency];
        const result = await executeQuery(query,values)
        return result
    }
    catch(error){
        console.log(error,'error creating transfer')

    }

}

export const transferIntoWallet = async(walletId,amount) => {
    try{
       const  query = `UPDATE wallets set amount = amount - ? WHERE id = ?`
       const values = [amount,walletId]
       const result = await executeQuery(query,values)
       return result
    }
    catch(error)
    {
        console.log(error,'error  in transferring ')
    }
}