using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using myMicroservice.DBContexts;
using myMicroservice.Dtos;
using myMicroservice.Helpers;
using myMicroservice.Repository;

namespace myMicroservice.Services
{
    public interface IAccountDtoService
    {
        AccountDto Authenticate(string username, string password);
        IEnumerable<AccountDto> GetAll();
    }

    public class AccountDtoService : IAccountDtoService
    {
        // users hardcoded for simplicity, store in a db with hashed passwords in production applications
        private List<AccountDto> _users = new List<AccountDto>
        {
            new AccountDto { AccountID = 1, Name = "Test", Email = "test@gmail.com", Password = "test" }
        };

        private readonly AppSettings _appSettings;
        private readonly IAccountRepository _accountRepository;
        private readonly IMapper _mapper;
        public AccountDtoService(IOptions<AppSettings> appSettings,IAccountRepository accountRepository,
                                 IMapper mapper)
        {
            _appSettings = appSettings.Value;
            _accountRepository = accountRepository;
            _mapper = mapper;
        }

        public AccountDto Authenticate(string username, string password)
        {
            var userBase = _accountRepository.Authenticate(username,password);
            var user = _mapper.Map<AccountDto>(userBase);

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.AccountID.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            // remove password before returning
            user.Password = null;

            return user;
        }

        public IEnumerable<AccountDto> GetAll()
        {
            // return users without passwords
            return _users.Select(x => {
                x.Password = null;
                return x;
            });
        }
    }
}