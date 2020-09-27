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