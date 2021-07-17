using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace API.Services
{
    public class TokenService : ITokenService

    {
        private readonly SymmetricSecurityKey _key;
        public TokenService(IConfiguration config)
        {
            // !!! go to appsettings.Development.json -> find property: TokenKey
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config[
                "OliverKey"
            ]));
        }

        public string CreateToken(AppUser user)
        {
            var claims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.NameId, user.UserName)
            };

            var creds = new SigningCredentials(_key , SecurityAlgorithms.HmacSha512Signature);

            // ! create Descriptor
            var TokenDescriptor = new SecurityTokenDescriptor{
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHander = new JwtSecurityTokenHandler();

            var token = tokenHander.CreateToken(TokenDescriptor);

            return tokenHander.WriteToken(token);

        }
    }
}