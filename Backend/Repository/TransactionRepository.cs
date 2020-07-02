using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using myMicroservice.DBContexts;
using myMicroservice.Models;
using myMicroservice.Repository;
using MailKit.Net.Smtp;
using MimeKit;
using MailKit;
using MailKit.Security;
namespace myMicroservice.Repository
{
    public class TransactionRepository : ITransactionRepository
    {
        private readonly AccountContext _accountContext;
        public TransactionRepository(AccountContext accountContext)
        {
            this._accountContext = accountContext;
        }
        public Transaction createTransaction(Transaction transaction)
        {
            transaction.Date = DateTime.UtcNow;
            _accountContext.Transactions.Add(transaction);
            _accountContext.SaveChanges();
            var emailre = _accountContext.Accounts.Where(x => x.AccountNumber == int.Parse(transaction.Receiver)).FirstOrDefault();
            this.SendEmail(emailre.Email, transaction.Money.ToString(), transaction.Content, transaction.Sender, 2);
            var emailse = _accountContext.Accounts.Where(x => x.AccountNumber == int.Parse(transaction.Sender)).FirstOrDefault();
            this.SendEmail(emailse.Email, transaction.Money.ToString(), transaction.Content, transaction.Receiver, 1);
            return transaction;
        }

        public List<Transaction> getAllTransaction(int user)
        {
            List<Transaction> transactions = null;
            var a = _accountContext.Transactions.Where(x => x.Sender == user.ToString() || x.Receiver == user.ToString() );
            transactions = a.ToList();
            return transactions;
        }
        public void SendEmail(string email, string money, string content, string user, int type)
        {
          MimeMessage message = new MimeMessage();

          MailboxAddress from = new MailboxAddress("Bank",
          "datien199801@gmail.com");
          message.From.Add(from);

          MailboxAddress to = new MailboxAddress("User",
          email);
          message.To.Add(to);

          message.Subject = "NTD Bank";
          BodyBuilder bodyBuilder = new BodyBuilder();
          if (type == 2)
            bodyBuilder.TextBody = "Quý khách đã nhận được " + money + " với nội dung: " + content + " từ số tài khoản: " + user;
          else
            bodyBuilder.TextBody = "Quý khách đã chuyển " + money + " với nội dung: " + content + " cho số tài khoản: " + user;
          message.Body = bodyBuilder.ToMessageBody();

          using (var client = new SmtpClient())
          {
            client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTlsWhenAvailable);
            client.Authenticate("datien199801@gmail.com", "05011998Dat");
            client.Send(message);
            client.Disconnect(true);
            client.Dispose();
          }
        }
  }
}
