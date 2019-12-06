using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using myMicroservice.Models;
namespace myMicroservice.DBContexts
{
    public class AccountContext : DbContext
    {
        public AccountContext(DbContextOptions<AccountContext> options) : base(options)
        {
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<BankAccount> BankAccounts { get; set; }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Account>().HasData(new Account
        //    {
        //        AccountID = 1,
        //        Name = "NTD",
        //        Email = "NTD@gmail.com",
        //        Password = "123123",
        //        State = Account.state.activate,
        //    }) ;
        //}
    }
}
