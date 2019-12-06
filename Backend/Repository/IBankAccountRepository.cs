using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myMicroservice.Models;
using myMicroservice.Dtos;
namespace myMicroservice.Repository
{
    public interface IBankAccountRepository
    {
        BankAccount CreateBA(BankAccount BA);
        void UpdateBA(BankAccount BA);

        BankAccount GetBA(int banum);
    }
}
