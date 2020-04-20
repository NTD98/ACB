using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myMicroservice.Models;
using myMicroservice.DBContexts;
using Microsoft.EntityFrameworkCore;

namespace myMicroservice.Repository
{
    public class BankAccountRepository : IBankAccountRepository
    {
        private readonly AccountContext _accountContext;
        public BankAccountRepository(AccountContext accountContext)
        {
            _accountContext = accountContext;
        }
        public BankAccount CreateBA(BankAccount BA)
        {
            if (_accountContext.BankAccounts.Any(x => x.AccountNumber == BA.AccountNumber))
            {
                throw new ApplicationException("This BA number is already taken!");
            }
            BA.AccountType = "Student";
            BA.RealBalance = 50000;
            BA.AvailableBalance = 0;
            _accountContext.BankAccounts.Add(BA);
           // _accountContext.Add(BA);
            _accountContext.SaveChanges();
            return BA;
        }

        public BankAccount GetBA(int banum)
        {
            return _accountContext.BankAccounts.Find(banum);
        }

        public BankAccount GetBAByAcc(int Accnum)
        {
            return _accountContext.BankAccounts.Where(x => x.AccountNumber == Accnum).First();
        }

        

          public void UpdateBA(BankAccount BA, int type)
          {
                var ba = _accountContext.BankAccounts.Where(x => x.AccountNumber == BA.AccountNumber);
                if (ba == null)
                {
                    throw new ApplicationException("Bank Account not found!");
                }
                _accountContext.Entry(BA).State = EntityState.Modified;
                _accountContext.SaveChanges();
                var ac = _accountContext.Accounts.Where(x => x.AccountNumber == BA.AccountNumber).FirstOrDefault();
          }
    }
}
