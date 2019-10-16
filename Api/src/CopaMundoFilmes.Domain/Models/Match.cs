using System.Collections.Generic;
using System.Linq;

namespace CopaMundoFilmes.Domain.Models
{
    public class Match
    {
        public Movie PlayerOne { get; }
        public Movie PlayerTwo { get; }

        public Match(Movie playerOne, Movie playerTwo)
        {
            PlayerOne = playerOne;
            PlayerTwo = playerTwo;
        }

        public Movie GetWinner()
        {
            var movies = new List<Movie>
            {
                PlayerOne,
                PlayerTwo
            };

            return movies.OrderByDescending(x => x.Nota).ThenBy(x => x.Titulo).First();
        }
    }
}