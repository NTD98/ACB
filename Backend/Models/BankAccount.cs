using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace myMicroservice.Models
{
    public class BankAccount
    {
        public int ID {get;set;}
        public int AccountNumber { get; set; }
        public DateTime Date { get; set; }
        public int RealBalance { get; set; }
        public int AvailableBalance { get; set; }
        public string AccountType { get; set; }
    }
}
