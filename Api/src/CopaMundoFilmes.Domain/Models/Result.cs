using System.Collections.Generic;
using System.Net;

namespace CopaMundoFilmes.Domain.Models
{
    public class Result<TData>
    {
        public HttpStatusCode StatusCode { get; }
        public TData Data { get; }
        public IEnumerable<string> Errors { get; }

        public Result(HttpStatusCode statusCode, TData data)
        {
            Data = data;
            StatusCode = statusCode;
        }


        public Result(string error, HttpStatusCode status = HttpStatusCode.BadRequest)
        {
            Errors = new List<string>() { error };
            StatusCode = status;
        }

        public Result(IEnumerable<string> errors)
        {
            Errors = errors;
            StatusCode = HttpStatusCode.BadRequest;
        }

    }

    public class Result : Result<object>
    {
        public Result(HttpStatusCode statusCode, object data = null) : base(statusCode, data)
        {

        }

        public Result(string error, HttpStatusCode status = HttpStatusCode.BadRequest) : base(error, status)
        {

        }

        public Result(IEnumerable<string> errors) : base(errors)
        {

        }
    }
}
