using System.Collections.Generic;
using System.IO;
using System.Security.Principal;
using System.Text.Json;
using Microsoft.AspNetCore.Hosting;
using JsonSerializer = Newtonsoft.Json.JsonSerializer;

namespace twitter_showcase.Services
{
    public class JsonTweetService
    {
        public JsonTweetService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment{get;}

        private string JsonFileName;
        // {
        //     get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "tweets"); }
        // }

        public IEnumerable<Tweet> GetTweets()
        {
            using var jsonFileReader = File.OpenText(JsonFileName);
            return JsonSerializer.Deserialize<Tweet[]>(jsonFileReader.ReadToEnd(), new JsonSerializerOptions(
            {
                PropertyNameCaseInsensitive = true
            });
        }
    }
}