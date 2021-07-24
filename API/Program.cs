using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            // !! set up for Seed Data
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;
            var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogInformation( " ================ Main() start in program.cs ================");
            try{
                var context = services.GetRequiredService<DataContext>();
                // ! equivalent with dotnet update DB
                await context.Database.MigrateAsync();
                // ! seed data here
                await Seed.SeedUser(context);

            }catch(Exception ex){
                // ! log error in console if happen

                logger.LogError(ex, " ************** Error occur in Main() in program.cs ***************");
            }
            // ! need Run() -> program run from here
            await host.RunAsync();

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
