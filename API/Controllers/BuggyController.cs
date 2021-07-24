using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("auth")]
        [Authorize]
        public ActionResult<string> GetSecret(){
            return "get secret from nothing";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound(){
            var thing = _context.Users.Find(-2);
            if(thing == null) return NotFound();
            // ! never exist
            return Ok(thing);
        }


        [HttpGet("server-error")]
        public ActionResult<string> GetServerError(){


                var thingToReturn = _context.Users.Find(-1);
                            var test = thingToReturn.ToString();
                            return test;

        }

        [HttpGet("bad-request")]
        public ActionResult<string>GetBadRequest(){
            return BadRequest("This is not a good request");
        }



    }
}