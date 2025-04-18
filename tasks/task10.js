        function processTransactions(alltransactions){
            let balance=0;
            let totalDeposit=0;
            let totalWithdrawal=0;
            for(let transactions of alltransactions){
                if(transactions.type==='deposit'){
                    balance+=transactions.amount;
                    totalDeposit+=transactions.amount;
                }else if(transactions.type==='withdrawal'){
                    balance-=transactions.amount;
                    totalWithdrawal+=transactions.amount;
                }
            }
            return {
                finalbalance:balance,
                totalDeposit:totalDeposit,
                totalWithdrawal:totalWithdrawal
            }
        }


        const transactions=[
            {type:"deposit",amount:900},
            {type:'withdrawal',amount:100}
        ]

        const res=processTransactions(transactions);
        console.log(res);