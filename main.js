import express from 'express'
import { createUserTable } from './USER/user.model.js';
import { userRouter } from './USER/user.routes.js';
import { executeQuery } from './config/database.js';
import { createWalletTable } from './WALLET/wallet.model.js';
import { auth } from './middlewares/auth.js';
import { walletRouter } from './WALLET/wallet.route.js';
//import { alterUserTable } from './USER/user.model.js';
import { createUser } from './USER/user.services.js';
import { createWallet } from './WALLET/wallet.service.js';
import { createDepositTable } from './DEPOSIT/deposit.model.js';
import { depositRouter } from './DEPOSIT/deposit.routes.js';
// import { createDeposit } from './DEPOSIT/deposit.service.js';
import { createTransferTable } from './TRANSFER/transfer.model.js';
import { transferRouter } from './TRANSFER/transfer.routes.js';


const app = express();

app.use(express.json());

app.get('/homePage',auth,(req,res) =>{
    res.send( 'hello and i')
})


app.use("/USER", userRouter);
app.use("/wallet",walletRouter)
app.use("/deposit",depositRouter)
app.use("/transfer",transferRouter)



app.listen(3000,async() =>{
    await createUserTable()
    await createWalletTable()
    await createDepositTable()
    await createTransferTable()
    //await alterUserTable()
    console.log('server is running')
})