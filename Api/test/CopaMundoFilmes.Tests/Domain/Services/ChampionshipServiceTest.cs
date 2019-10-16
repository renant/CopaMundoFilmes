using System.Collections.Generic;
using System.Linq;
using System.Net;
using CopaMundoFilmes.Domain.Models;
using CopaMundoFilmes.Domain.Services;
using FizzWare.NBuilder;
using Xunit;

namespace CopaMundoFilmes.Tests.Domain.Services
{
    public class ChampionshipServiceTest
    {
        private readonly ChampionshipService _service;

        public ChampionshipServiceTest()
        {
            _service = new ChampionshipService();
        }

        [Fact]
        public void Metodo_RunChampionship_Deve_Returnar_Resultado_Final_Com_Sucesso()
        {
            var movies = new List<Movie>()
            {
                new Movie()
                {
                    Id = "tt3606756",
                    Titulo = "Os Incríveis 2",
                    Nota = 8.5M
                },
                new Movie()
                {
                    Id = "tt4881806",
                    Titulo = "Jurassic World: Reino Ameaçado",
                    Nota = 6.7M
                },
                new Movie()
                {
                    Id = "tt5164214",
                    Titulo = "Oito Mulheres e um Segredo",
                    Nota = 6.3M
                },
                new Movie()
                {
                    Id = "tt7784604",
                    Titulo = "Hereditário",
                    Nota = 7.8M
                },
                new Movie()
                {
                    Id = "tt4154756",
                    Titulo = "Vingadores: Guerra Infinita",
                    Nota = 8.7M
                },
                new Movie()
                {
                    Id = "tt5463162",
                    Titulo = "Deadpool 2",
                    Nota = 8.1M
                },
                new Movie()
                {
                    Id = "tt3778644",
                    Titulo = "Han Solo: Uma História Star Wars",
                    Nota = 7.2M
                },
                new Movie()
                {
                    Id = "tt3501632",
                    Titulo = "Thor: Ragnarok",
                    Nota = 7.9M
                }
            };

            var result = _service.RunChampionship(movies);

            Assert.Null(result.Errors);
            Assert.Equal(movies[4].Id, result.Data.FirstPlace.Id);
            Assert.Equal(movies[0].Id, result.Data.SecondPlace.Id);
            Assert.Equal(HttpStatusCode.OK, result.StatusCode);
        }

        [Fact]
        public void Metodo_RunChampionship_Deve_Validar_Numero_De_Filmes()
        {
            var listaMenor = Builder<Movie>.CreateListOfSize(3).Build();
            var listaMaior = Builder<Movie>.CreateListOfSize(9).Build();

            var resultadoMenor = _service.RunChampionship(listaMenor);
            var resultadoMaior = _service.RunChampionship(listaMaior);

            Assert.Equal("Um campeonato deve conter um total de 8 filmes...", resultadoMenor.Errors.ElementAt(0));
            Assert.Null(resultadoMenor.Data);
            Assert.Equal(HttpStatusCode.BadRequest,resultadoMenor.StatusCode);

            Assert.Equal("Um campeonato deve conter um total de 8 filmes...", resultadoMaior.Errors.ElementAt(0));
            Assert.Null(resultadoMaior.Data);
            Assert.Equal(HttpStatusCode.BadRequest, resultadoMaior.StatusCode);
        }
    }
}
