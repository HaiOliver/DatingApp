using System;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using API.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IHostEnvironment _env;
        private readonly ILogger<ExceptionMiddleware> _logger;
        public ExceptionMiddleware(RequestDelegate next,
                                   ILogger<ExceptionMiddleware> logger,

        IHostEnvironment env)
        {
            _env = env;
            _next = next;
            _logger = logger;
        }

        // !! specific function for middle ware
        // ? HttpContext -> comming request from front end
        public async Task InvokeAsync(HttpContext context){
            try {
                await _next(context);
            } catch (Exception ex){
                // ? Log error on console -> help me check what kind of error
                _logger.LogError(ex.Message);

                // ?? start build up response
                context.Response.ContentType = "application/json";
                // ? cast to int
                context.Response.StatusCode = (int) HttpStatusCode.InternalServerError;


                // ! main response back to front end -> instances of APIexception class created in Errors folder
                var response = _env.IsDevelopment()
                    ? new ApiException(context.Response.StatusCode,ex.Message, ex.StackTrace?.ToString())
                    : new ApiException(context.Response.StatusCode, "Oliver check error in server");

                // ? header response
                var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};

                // ? get full package for body response
                var json = JsonSerializer.Serialize(response, options);

                // ? return
                await context.Response.WriteAsync(json);


            }
        }
}
}