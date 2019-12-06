using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myMicroservice.Models
{
    public class Account
    {
        public enum state
        {
            unactivate,
            activate,
            delete,
        }
        public int AccountID { get; set; }
        public int AccountNumber { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public state State { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}
