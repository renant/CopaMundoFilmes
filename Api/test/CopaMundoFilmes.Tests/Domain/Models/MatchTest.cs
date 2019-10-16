using CopaMundoFilmes.Domain.Models;
using Xunit;

namespace CopaMundoFilmes.Tests.Domain.Models
{
    public class MatchTest
    {
        [Fact]
        public void Deve_Gerar_Resultado_De_Match()
        {
            var movie1 = new Movie()
            {
                Id = "1",
                Titulo = "ABC",
                Nota = 8.5M
            };

            var movie2 = new Movie()
            {
                Id = "2",
                Titulo = "XYZ",
                Nota = 8.7M
            };

            var match = new Match(movie1, movie2);

            var result = match.GetWinner();

            Assert.Equal(movie2.Id,result.Id);
        }

        [Fact]
        public void Deve_Gerar_Resultado_De_Match_Com_Criterio_De_Desempate_Por_Titulo()
        {
            var movie1 = new Movie()
            {
                Id = "1",
                Titulo = "ABC",
                Nota = 8.5M
            };

            var movie2 = new Movie()
            {
                Id = "2",
                Titulo = "XYZ",
                Nota = 8.5M
            };

            var match = new Match(movie1, movie2);

            var result = match.GetWinner();

            Assert.Equal(movie1.Id, result.Id);
        }
    }
}