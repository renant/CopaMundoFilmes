using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using CopaMundoFilmes.API.Extensions;
using CopaMundoFilmes.Domain.Models;
using CopaMundoFilmes.Domain.Models.Outputs;
using CopaMundoFilmes.Domain.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CopaMundoFilmes.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChampionshipController : Controller
    {
        private readonly IChampionshipService _championshipService;

        public ChampionshipController(IChampionshipService championshipService)
        {
            _championshipService = championshipService;
        }

        [HttpPost]
        [Route("")]
        [ProducesResponseType(typeof(FinalResult),(int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(ErrorsOutput), (int)HttpStatusCode.BadRequest)]
        [ProducesResponseType(typeof(ErrorsOutput), (int)HttpStatusCode.InternalServerError)]
        public IActionResult RunChampionship([FromBody]IEnumerable<Movie> movies)
        {
            try
            {
                var result = _championshipService.RunChampionship(movies);
                return result.ToHttpResponse();
            }
            catch (Exception)
            {
                return new Result("Erro ao execultar campeonato, tente novamente mais tarde", HttpStatusCode.InternalServerError).ToHttpResponse();
            }
        }

    }
}