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
        public object GetUser(string searchTerm)
        {
            try
            {
                return _jsonTweetsService
                    .SearchUserTimelineTweets(searchTerm, 15);
            }
            catch
            {
                return new ErrorMessage(1);
            }
        }

        [Route("content/{searchTerm}")]
        public object GetContent(string searchTerm)
        {
            try
            {
                return _jsonTweetsService
                    .SearchTweetsByContent(searchTerm)
                  ;
            }
            catch
            {
                return new ErrorMessage(2);
            }
        }

        [Route("showcase/{searchTerm}")]
        public object GetShowcase(string searchTerm)
        {
            try
            {
                return _jsonTweetsService
                    .SearchUserTimelineTweets(searchTerm, 15);
            }
            catch
            {
                return new ErrorMessage(3);
            }
        }
    }
}