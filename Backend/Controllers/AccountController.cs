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
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper _mMapper;
        private readonly AppSettings _appSettings;
        private readonly IAccountDtoService _accountDtoService;
        public AccountController(IAccountRepository accountRepository,IMapper mapper,IOptions<AppSettings> appSettings,IAccountDtoService accountDtoService)
        {
            _accountRepository = accountRepository;
            //_appSettings = appSettings.Value;
            _mMapper = mapper;
            _accountDtoService = accountDtoService;
        }
        // GET: api/Account
        
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [AllowAnonymous]
        
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]AccountDto account)
        {
            var user = _accountDtoService.Authenticate(account.Name, account.Password);

            if (user == null)
                return BadRequest(new { message = "Name or password is incorrect" });

            return Ok(new
            {
                Id = user.AccountID,
                AccountNumber= user.AccountNumber,
                Token = user.Token
            });
        }
        // GET: api/Account/5
        [HttpGet("{id}", Name = "GetAC")]
        public IActionResult GetAccount(int id)
        {
            if (id > 1000)
            {
                return GetAccountByAccNum(id);
            }
            else
            {
                try
                {
                    var account = _accountRepository.GetAccountByName(id);
                    return new OkObjectResult(account);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }
            
        }
        [HttpGet]
        public IActionResult GetAccountByAccNum(int accnum)
        {
            try
            {
                var account = _accountRepository.GetAccountByAccNum(accnum);
                return new OkObjectResult(account);
            }
            catch(Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
        // POST: api/Account
        [AllowAnonymous]
        [HttpPost]
        public IActionResult Create([FromBody] AccountDto accountDto)
        {
            var user = _mMapper.Map<Account>(accountDto);
            using ( var scope = new TransactionScope())
            {
                
                try
                {
                    var banum = _accountRepository.CreateAccount(user, accountDto.Password);

                    scope.Complete();
                    return CreatedAtAction("Get",accountDto,banum);
                }
                catch(Exception ex)
                {
                    return BadRequest(new { message=ex.Message});
                }
            }
        }

        // PUT: api/Account/5
        [HttpPut]
        public IActionResult Update([FromBody] AccountDto accountDto,int id)
        {
            var user = _mMapper.Map<Account>(accountDto);
            user.AccountID = id;
            if (accountDto!=null)
            {
                try
                {
                    using (var scope = new TransactionScope())
                    {
                        _accountRepository.UpdateAccount(id, accountDto.Password);
                        scope.Complete();
                        return new OkResult();
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }
            return new NoContentResult();
        }

        [HttpPut("{id}", Name ="Active")]
        public IActionResult Active([FromBody] Account account)
        {
            if (account != null)
            {
                try
                {
                    using (var scope = new TransactionScope())
                    {
                        _accountRepository.ActivateAccount(account);
                        scope.Complete();
                        return new OkResult();
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest(new { message = ex.Message });
                }
            }
            return new NoContentResult();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
