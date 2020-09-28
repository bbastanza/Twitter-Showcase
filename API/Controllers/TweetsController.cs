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


        private List<Tweet> _tweets;

        public TweetsController()
        {
        
            _tweets = JsonTweetsService.GetTweets();
        }
        
        // GET
        public List<Tweet> Get()
        {
            return _tweets;
        }

        // get/id
        // public Tweet GetID(int id)
        // {
        //     return _tweets.FirstOrDefault(x => x.Id == id);
        // }
    }
}