using CopaMundoFilmes.Domain.Models;
using CopaMundoFilmes.Domain.Services.Interfaces;
using System.Collections.Generic;
using System.Net;
using System.Linq;

namespace CopaMundoFilmes.Domain.Services
{
    public class ChampionshipService : IChampionshipService
    {
        public Result<FinalResult> RunChampionship(IEnumerable<Movie> movies)
        {
            if(movies.Count() != 8)
                return new Result<FinalResult>("Um campeonato deve conter um total de 8 filmes...");

            var quarterFinals = BuildQuarterfinals(movies);
            var quarterResults = RunMatches(quarterFinals);
            var semifinal = BuildSemifinals(quarterResults);
            var semifinalResults = RunMatches(semifinal);
            var finalResult = RunFinal(semifinalResults);

            return new Result<FinalResult>(HttpStatusCode.OK, finalResult);
        }

        private static IEnumerable<Match> BuildQuarterfinals(IEnumerable<Movie> movies)
        {
            movies = movies.OrderBy(x => x.Titulo).ToList();

            var matches = new List<Match>();

            const int numberOfMatches = 4;

            for (var i = 0; i < numberOfMatches; i++)
            {
                var lastIndex = i + 1;

                var match = new Match(movies.ElementAt(i), movies.ElementAt(movies.Count() - lastIndex));

                matches.Add(match);
            }

            return matches;
        }
        private static IEnumerable<Match> BuildSemifinals(IEnumerable<Movie> movies)
        {
            var matches = new List<Match>();
            var numberOfMatches = movies.Count();

            for (var i = 0; i < numberOfMatches; i += 2)
            {
                var match = new Match(movies.ElementAt(i), movies.ElementAt(i + 1));

                matches.Add(match);
            }

            return matches;
        }
        private static FinalResult RunFinal(IEnumerable<Movie> semifinalResults)
        {
            var match = new Match(semifinalResults.First(), semifinalResults.Last());
            var firstPlace = match.GetWinner();
            var secondPlace = semifinalResults.First(x => x.Id != firstPlace.Id);

            return new FinalResult(firstPlace, secondPlace);
        }
        private static IEnumerable<Movie> RunMatches(IEnumerable<Match> quarterFinals)
        {
            return quarterFinals.Select(match => match.GetWinner()).ToList();
        }

    }

}
