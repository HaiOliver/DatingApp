using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    // create bridge => schema
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options): base (options){
            
        }
        // create Users table in DB
        public DbSet<AppUser> Users { get; set; }
    }
}