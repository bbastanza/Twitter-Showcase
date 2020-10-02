using System;
using System.Collections.Generic;
using System.Linq;

using API.Services;
using Microsoft.AspNetCore.Mvc;
using twitter_showcase;

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
        
        [Route("content/{id}")]
        public object GetContent(string id)
        {
            return _jsonTweetsService.GetTweets($"https://api.twitter.com/1.1/search/tweets.json?q={id}&result_type=popular&count=5").Result;
        }
        
        [Route("user/{id}")]
        public object GetUser(string id)
        {
            return _jsonTweetsService.GetTweets($"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={id}&count=5", true).Result;
        }

    }
}