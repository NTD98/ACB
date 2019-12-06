using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using myMicroservice.DBContexts;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using myMicroservice.Models;
using myMicroservice.Helpers;

namespace myMicroservice.Services
{
    public interface IBankAccountService
    {
        //BankAccount Authenticate(string username, string password);
        BankAccount GetBA(int BAnumber);
        void UpdateBA(int BAnumber,int money);
        BankAccount CreateBA(BankAccount ba);
    }

    public class BankAccountService : IBankAccountService
    {
        // users hardcoded for simplicity, store in a db with hashed passwords in production applications
        //private List<BankAccount> _users = new List<BankAccount>
        //{
        //    new BankAccount { AccountID = 1, Name = "Test", Email = "test@gmail.com", Password = "test" }
        //};

        private readonly AppSettings _appSettings;
        private readonly AccountContext _accountContext;
        public BankAccountService(IOptions<AppSettings> appSettings,AccountContext accountContext)
        {
            _appSettings = appSettings.Value;
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
            _accountContext.Add(BA);
            _accountContext.SaveChanges();
            return BA;
        }

        public BankAccount GetBA(int BAnumber)
        {
            // return users without passwords
            return _accountContext.BankAccounts.Find(BAnumber);
        }

        public void UpdateBA(int BAnumber, int money)
        {
            var ba = _accountContext.BankAccounts.Find(BAnumber);
            ba.RealBalance += money;
            ba.AvailableBalance += money;
            _accountContext.Entry(ba).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _accountContext.SaveChanges();
        }
    }
}