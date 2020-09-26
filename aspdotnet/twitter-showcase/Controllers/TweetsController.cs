using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace twitter_showcase.Controllers
{
    public class TweetsController : Controller
    {

        // endpoints.MapControllerRoute(
        // name: "default",
        // pattern: "{controller}/{action=Index}/{id?}");
        
        
        private List<Tweet> _tweets = new List<Tweet>();

        public TweetsController()
        {
            _tweets.Add(new Tweet{Id = 1, LikeCount = 37, RetweetCount = 100, UserName = "Brian Bastanza"});
            _tweets.Add(new Tweet{Id = 2, LikeCount = 327, RetweetCount = 2100, UserName = "Briana Bastanza"});
        }
        
        
        
        // GET
        public List<Tweet> Get()
        {
            return _tweets;
        }
        // get/id
        public Tweet GetID(int id)
        {
           return _tweets.FirstOrDefault(x => x.Id == id);
        }
    }
}