using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myMicroservice.Dtos
{
    public class AccountDto
    {
        public int AccountID { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int AccountNumber { get; set; }
        public string Token { get; set; }
    }
}
