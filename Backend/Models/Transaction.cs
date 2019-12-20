using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myMicroservice.Models
{
    public class Transaction
    {
        public int ID { get; set; }
        public string Sender { get; set; }
        public string Receiver { get; set; }
        public string Content { get; set; }
        public int Money { get; set; }
        public DateTime Date { get; set; }
        
    }
}
