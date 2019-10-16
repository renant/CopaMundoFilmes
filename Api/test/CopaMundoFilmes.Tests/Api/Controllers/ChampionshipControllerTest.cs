using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using CopaMundoFilmes.API.Controllers;
using CopaMundoFilmes.Domain.Models;
using CopaMundoFilmes.Domain.Services.Interfaces;
using FizzWare.NBuilder;
using Moq;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace CopaMundoFilmes.Tests.Api.Controllers
{
    public class ChampionshipControllerTest
    {
        private readonly Mock<IChampionshipService> _mockService;
        private readonly ChampionshipController _controller;

        public ChampionshipControllerTest()
        {
            _mockService = new Mock<IChampionshipService>();
            _controller = new ChampionshipController(_mockService.Object);
        }

        [Fact]
        public void Metodo_RunChampionship_Deve_Retornar_Ok()
        {
            var movies = Builder<Movie>.CreateListOfSize(8).Build();

            var finalResult = new Result<FinalResult>(HttpStatusCode.OK, new FinalResult(
                movies.FirstOrDefault(),
                movies.LastOrDefault()
                ));

            _mockService.Setup(x => x.RunChampionship(movies))
                .Returns(finalResult);

            var result = _controller.RunChampionship(movies);

            Assert.NotNull(result);
            Assert.IsType<ObjectResult>(result);

            var obj = (ObjectResult)result;

            Assert.Equal(200, obj.StatusCode);
            Assert.IsType<FinalResult>(obj.Value);
            _mockService.Verify(x => x.RunChampionship(movies), Times.Once);
        }

        [Fact]
        public void Metodo_RunChampionship_Deve_Retornar_InternalServerError()
        {
            var movies = Builder<Movie>.CreateListOfSize(8).Build();

            _mockService.Setup(x => x.RunChampionship(movies))
                .Throws(new Exception());

            var result = _controller.RunChampionship(movies);

            Assert.NotNull(result);
            Assert.IsType<ObjectResult>(result);

            var obj = (ObjectResult)result;

            Assert.Equal(500, obj.StatusCode);
            _mockService.Verify(x => x.RunChampionship(movies), Times.Once);
        }
    }
}