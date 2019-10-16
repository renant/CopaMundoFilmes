using CopaMundoFilmes.Domain.Models;
using System.Collections.Generic;

namespace CopaMundoFilmes.Domain.Services.Interfaces
{
    public interface IChampionshipService
    {
        Result<FinalResult> RunChampionship(IEnumerable<Movie> movies);
    }
}
