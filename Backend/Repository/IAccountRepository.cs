using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myMicroservice.Models;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
namespace myMicroservice.Repository
{
    public interface IAccountRepository
    {
        BankAccount CreateAccount(Account account,string Password);
        void UpdateAccount(Account account,string Password);
        void ActivateAccount(Account account);
        Account GetAccountByName(int id);
        Account Authenticate(string username, string password);
        void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt);
        bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt);
    }
}
