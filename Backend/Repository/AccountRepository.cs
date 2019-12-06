using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myMicroservice.Models;
using myMicroservice.DBContexts;
using Microsoft.EntityFrameworkCore;
using myMicroservice.Dtos;
using myMicroservice.Helpers;
using AutoMapper;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace myMicroservice.Repository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly AccountContext _accountContext;
        
        
        public AccountRepository(AccountContext accountContext)
        {
            _accountContext = accountContext;
            
        }
        public void ActivateAccount(Account account)
        {
            account.State = Account.state.activate;
            _accountContext.Entry(account).State = EntityState.Modified;
            _accountContext.SaveChanges();
        }
        public Account Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = _accountContext.Accounts.SingleOrDefault(x => x.Name == username);

            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            // authentication successful
            return user;
        }
        BankAccount initBA()
        {
            BankAccount ba = new BankAccount();
            Random rnd = new Random();
            ba.AccountNumber = rnd.Next(10000, 99999);
            while (_accountContext.BankAccounts.Find(ba.AccountNumber) != null)
            {
                ba.AccountNumber = rnd.Next(10000, 99999);
            }
            ba.AccountType = "Student";
            ba.RealBalance = 50000;
            ba.AvailableBalance = 0;
            return ba;
        }
        public BankAccount CreateAccount(Account account,string Password)
        {
            if (_accountContext.Accounts.Any(x => x.Name == account.Name))
                throw new ApplicationException("This name has been already taken");
            if (_accountContext.Accounts.Any(x => x.Email == account.Email))
                throw new ApplicationException("This email has been already taken");
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(Password, out passwordHash, out passwordSalt);
            account.PasswordHash = passwordHash;
            account.PasswordSalt = passwordSalt;
            //_accountContext.Add(account);
            
            BankAccount ba = initBA();
            account.AccountNumber = ba.AccountNumber;
            _accountContext.Add(ba);
            _accountContext.Add(account);
            _accountContext.SaveChanges();
            return ba;
        }

        public Account GetAccountByName(int id)
        {
            return _accountContext.Accounts.Find(id);
        }

        public void UpdateAccount(Account account,string Password)
        {
            var acc = _accountContext.Accounts.Find(account.AccountID);
            if (acc == null)
                throw new ApplicationException("User not found");
            if(account.Name!=acc.Name)
            {
                if (_accountContext.Accounts.Any(x => x.Name == account.Name))
                    throw new ApplicationException("This name has been taken");
            }
            if (!string.IsNullOrWhiteSpace(Password))
            {
                byte[] passwordHash, passwordSalt;
                CreatePasswordHash(Password, out passwordHash, out passwordSalt);

                account.PasswordHash = passwordHash;
                account.PasswordSalt = passwordSalt;
            }
            _accountContext.Entry(account).State = EntityState.Modified;
            _accountContext.SaveChanges();
        }
        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }
    }
}
