// import { getWalletById } from "../WALLET/wallet.service.js";
import { transferSchema } from "../validators/transfer.js";
import { createTransfer } from "./transfer.service.js";
import { transferIntoWallet } from "./transfer.service.js";
import { getWalletByid } from "../WALLET/wallet.service.js";
import { parse } from "dotenv";


export const createTransferController = async (req,res) => {
    try{
      const  walletId = req.params.walletId;
        const curr_user = req.user;
        if (! curr_user){
           return res.status(401).json('Unauthorised you cant access this endpoint') 
        }

        const {error,value} =  transferSchema.validate(req.body)
        if(error){
           res.status(400).json({error:error.message}) 
        }
        const wallets = await getWalletByid(walletId)
        if(wallets.length == 0){
            return res.status(400).json({error:'wallet not found'})
        }
       let  {amount,currency} = value;

        if(wallets[0].currency != currency){
            return res.status(400).json({error:'you dont use that type of currency'})
        }
         amount = parseFloat(amount);

        if (isNaN(amount) || amount < 0){
            return res.status(400).json({error:'invalid amount'})

        }

        if(wallets[0].amount < amount){
            res.status(400).json({error:'insufficient fund'})
        }
        await transferIntoWallet(walletId,amount);
        await createTransfer(walletId,amount,currency);

        const updatedWallet = await getWalletByid(walletId)
        return res.status(201).json({
            message:'Trasnfer Succesfull',
            updatedWallet
        })
    }
    catch(error)
    {
        return res.status(401).json({
            error:'error creating transfer '
        })
    }
}