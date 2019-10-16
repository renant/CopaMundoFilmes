namespace CopaMundoFilmes.Domain.Models
{
    public class FinalResult
    {
        public FinalResult(Movie firstPlace, Movie secondPlace)
        {
            FirstPlace = firstPlace;
            SecondPlace = secondPlace;
        }

        public Movie FirstPlace { get; }
        public Movie SecondPlace { get; }
    }
}