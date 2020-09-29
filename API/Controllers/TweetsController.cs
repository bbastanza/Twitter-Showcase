using System;
using System.Collections.Generic;
using System.Linq;
using API.Models;
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


        private Object _tweets;

        public TweetsController()
        {
            _tweets = JsonTweetsService.GetTweets("barackobama");
        }
        
        // GET
        public Object Get()
        {
            return _tweets;
        }
        
    }
}