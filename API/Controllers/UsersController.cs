using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // need those signigture
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        // past instance of DB 
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        // get list all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            var users = await _context.Users.ToListAsync();
            return users;
        }

        // Get single user with id
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id){
            System.Diagnostics.Debug.WriteLine("******************** test in line 31");
            return await _context.Users.FindAsync(id);
        }


    }
}