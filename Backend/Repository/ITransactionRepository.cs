using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myMicroservice.Models;
namespace myMicroservice.Repository
{
    
    public interface ITransactionRepository
    {
        Transaction createTransaction(Transaction transaction);
        List<Transaction> getAllTransaction(int user);
        void SendEmail(string email, string money, string content, string sender, int type);
  }
}
