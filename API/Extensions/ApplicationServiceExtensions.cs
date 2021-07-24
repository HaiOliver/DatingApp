using API.Data;
using API.Helpers;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config){
            // ! use -> connect Token service and create Token
            services.AddScoped<ITokenService, TokenService>();
            // !! connect -> use UserRepository
            services.AddScoped<IUserRepository,UserRepository>();
            // !! connect -> AutoMapper
            services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
            //  create connection String
            services.AddDbContext<DataContext>(options => {
                // connect with defaultConnectionString from appSettings.Development
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            return services;
        }
    }
}