using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using myMicroservice.Repository;
using myMicroservice.Models;
using System.Transactions;

namespace myMicroservice.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionRepository _transactionRepository;
        public TransactionController(ITransactionRepository transactionRepository)
        {
            this._transactionRepository = transactionRepository;
        }
        [HttpGet]
        public List<Models.Transaction> getAllTransaction(int user)
        {
            return _transactionRepository.getAllTransaction(user);
        }
        [HttpPost]
        public IActionResult createTransaction([FromBody] Models.Transaction transaction)
        {
            if(transaction!=null)
            {
                using (var scope = new TransactionScope())
                {
                    try
                    {
                        var trans = _transactionRepository.createTransaction(transaction);
                        scope.Complete();
                        return new OkObjectResult(transaction);
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(new { message = ex.Message });
                    }
                }
            }
            else
            {
                return new NoContentResult();
            }
        }
    }
}