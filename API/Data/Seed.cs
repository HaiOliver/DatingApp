using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        // ! static -> reuse many times
        public static async Task SeedUser(DataContext context){
            if(await context.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            // ? got all users from json
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);

            foreach(var user in users){
                using var hmac = new HMACSHA512();
                // ? add passwordhash, salt -> user
                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("password"));
                user.PasswordSalt = hmac.Key;

                //? add user to DB
                context.Users.Add(user);

            }
            // ? save changes
            await context.SaveChangesAsync();

        }

        public static string TestOliver (){
            return "Oliver is handsome";
        }
    }
}