using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class GuessController : ControllerBase
{
    private readonly string _secretWord = "OpenAI"; // Секретное слово

    [HttpPost]
    public IActionResult CheckGuess([FromBody] GuessRequest request)
    {
        if (string.Equals(request.Guess, _secretWord, StringComparison.OrdinalIgnoreCase))
        {
            return Ok(new { success = true, message = "Поздравляю, ты угадал слово!" });
        }
        return Ok(new { success = false, message = "Неверно, попробуй ещё раз!" });
    }
}

public class GuessRequest
{
    public string Guess { get; set; } // Поле для ввода слова игроком
}
