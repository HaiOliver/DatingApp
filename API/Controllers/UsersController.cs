using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // need those signigture
    
    public class UsersController : BaseApiController
    {
        // past instance of DB 
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        // get list all users
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            var users = await _context.Users.ToListAsync();
            return users;
        }

        // Get single user with id
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id){
            System.Diagnostics.Debug.WriteLine("******************** test in line 31");
            return await _context.Users.FindAsync(id);
        }


    }
}