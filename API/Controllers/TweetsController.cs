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

        [Route("user/{id}")]
        public object GetUser(string id)
        {
            try
            {
                return _jsonTweetsService
                    .GetTweets(
                        $"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={id}&count=5&tweet_mode=extended",
                        true).Result;
            }
            catch
            {
                return new ErrorMessage(1);
            }
        }

        [Route("content/{id}")]
        public object GetContent(string id)
        {
            try
            {
                return _jsonTweetsService
                    .GetTweets(
                        $"https://api.twitter.com/1.1/search/tweets.json?q={id}&result_type=popular&count=5&tweet_mode=extended")
                    .Result;
            }
            catch
            {
                return new ErrorMessage(2);
            }
        }

        [Route("showcase/{id}")]
        public object GetShowcase(string id)
        {
            try
            {
                return _jsonTweetsService
                    .GetTweets(
                        $"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={id}&count=20&tweet_mode=extended",
                        true).Result;
            }
            catch
            {
                return new ErrorMessage(3);
            }
        }
    }
}