using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myMicroservice.DBContexts;
using myMicroservice.Models;
using myMicroservice.Repository;
namespace myMicroservice.Repository
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly AccountContext _accountContext;
        public TransactionRepository(AccountContext accountContext)
        {
            this._accountContext = accountContext;
        }
        public Transaction createTransaction(Transaction transaction)
        {
            transaction.Date = DateTime.UtcNow;
            _accountContext.Transactions.Add(transaction);
            _accountContext.SaveChanges();
            return transaction;
        }

        public List<Transaction> getAllTransaction(int user)
        {
            List<Transaction> transactions = null;
            var a = _accountContext.Transactions.Where(x => x.Sender == user.ToString() || x.Receiver == user.ToString() );
            transactions = a.ToList();
            return transactions;
        }
    }
}
