using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TweetsController : Controller
    {
        private readonly IJsonTweetsService _jsonTweetsService;

        public TweetsController(IJsonTweetsService jsonTweetsService)
        {
            _jsonTweetsService = jsonTweetsService;
        }

        [Route("user/{searchTerm}")]
        public IActionResult GetUser(string searchTerm)
        {
            try
            {
                return Ok(_jsonTweetsService
                    .SearchUserTimelineTweets(searchTerm, 15));
            }
            catch
            {
                return StatusCode(500, new ErrorMessage(1));
            }
        }

        [Route("content/{searchTerm}")]
        public IActionResult GetContent(string searchTerm)
        {
            try
            {
                return Ok(_jsonTweetsService
                    .SearchTweetsByContent(searchTerm));

            }
            catch
            {
                return StatusCode(500, new ErrorMessage(2));
            }
        }

        [Route("showcase/{searchTerm}")]
        public IActionResult GetShowcase(string searchTerm)
        {
            try
            {
                return Ok(_jsonTweetsService
                    .SearchUserTimelineTweets(searchTerm, 15));
            }
            catch
            {
                return StatusCode(500, new ErrorMessage(3));
            }
        }
    }
}