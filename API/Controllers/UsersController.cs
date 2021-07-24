using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // need those signigture

    public class UsersController : BaseApiController
    {
        // ! use extra abstract: DBContext -> IUserRepository -> UsersController
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        //! USE MAPPER TO mapper MemberDto -> AppUser
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;

        }

        // get list all users
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            // ? implement function inside _userrepository
            var users = await _userRepository.GetMembersAsync();
            // ! convert AppUse -> MemberDto
            var userToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);
            return Ok(userToReturn);
        }

        // Get single user with name

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            // ? implement function inside _userrepository -> use getmemberAsyn -> improve performance

            var user =  await _userRepository.GetMemberAsync(username);
             // ! convert AppUse -> MemberDto
            return _mapper.Map<MemberDto>(user);
        }


    }
}