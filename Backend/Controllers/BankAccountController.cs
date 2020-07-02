using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using myMicroservice.Repository;
using myMicroservice.Models;
using System.Transactions;
using Microsoft.AspNetCore.Authorization;
using myMicroservice.Dtos;
using AutoMapper;
using myMicroservice.Helpers;
using myMicroservice.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Cors;

namespace myMicroservice.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class BankAccountController : ControllerBase
    {
        //private readonly IBankAccountService _IbankAccountService;
        private readonly IBankAccountRepository _baRepository;
        private readonly IBankAccountService _bankAccountService;

        public BankAccountController(IBankAccountRepository bARepository,IBankAccountService bankAccountService)
        {       
           _bankAccountService = bankAccountService;
            _baRepository = bARepository;
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        // GET: api/BankAccount/5
        [HttpGet("{id:int}", Name = "GetBA")]
        public IActionResult GetBA(int id)
        {
            if (id >= 1000)
            {
                return GetBAWithAccNum(id);
            }
            try
            {
                var ba = _baRepository.GetBA(id);
                return new OkObjectResult(ba);
            }catch(Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        // ?AccNum=...
        [HttpGet("accnum")]
        public IActionResult GetBAWithAccNum(int AccNum)
        {
            try
            {
                var ba = _baRepository.GetBAByAcc(AccNum);
                return new OkObjectResult(ba);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        // POST: api/BankAccount
        [HttpPost]
        public IActionResult CreateBA([FromBody] BankAccount ba)
        {
            if (ba != null)
            {
                try
                {
                    using (var scope = new TransactionScope())
                    {
                        var banum = _baRepository.CreateBA(ba);
                        scope.Complete();
                        return CreatedAtAction("GET", new { banknum = banum }, banum);
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }
            return new NoContentResult();
        }

        // PUT: api/BankAccount/5
        [HttpPut("{id}")]
        public IActionResult Put([FromBody] BankAccount ba,int id)
        {
            if (ba != null)
            {
                try
                {
                    using (var scope = new TransactionScope())
                    {
                        _baRepository.UpdateBA(ba,id);
                        scope.Complete();
                        return new OkResult();
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }
            else
                return new NoContentResult();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
