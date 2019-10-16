using System.Net;
using CopaMundoFilmes.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace CopaMundoFilmes.API.Extensions
{
    public static class ResponseExtensions
    {
        public static IActionResult ToHttpResponse<TData>(this Result<TData> result)
        {
            if (result.StatusCode == HttpStatusCode.BadRequest)
                return new ObjectResult(new { result.Errors }) { StatusCode = (int)HttpStatusCode.BadRequest };

            if (result.StatusCode == HttpStatusCode.InternalServerError)
                return new ObjectResult(new { result.Errors }) { StatusCode = (int)HttpStatusCode.InternalServerError };

            return new ObjectResult(result.Data) { StatusCode = (int)result.StatusCode };
        }
    }
}
