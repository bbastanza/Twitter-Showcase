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

        // endpoints.MapControllerRoute(
        // name: "default",
        // pattern: "{controller}/{action=Index}/{id?}");


        private readonly IJsonTweetsService _jsonTweetsService;

        public TweetsController(IJsonTweetsService jsonTweetsService)
        {
            _jsonTweetsService = jsonTweetsService;
        }

        public object Get()
        {
            return _jsonTweetsService.GetTweets("yankees").Result;
        }

    }
}