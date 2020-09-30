using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Text.Json;
using System.Threading.Tasks;
using API.Models;
using twitter_showcase;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace API.Services
{
    public class JsonTweetsService
    {
        public JsonTweetsService(IHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = (IWebHostEnvironment) webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        
        public static async Task<Tweets> GetTweets(string searchItem)
        {
            // using var jsonFile = File.OpenText(@"/home/stanzu10/Development/git/twitter-showcase/API/Data/mockdata.json");
            // string jsonText = jsonFile.ReadToEnd();
            //
            // return  JsonSerializer.Deserialize<Tweets>(jsonText);
            string url = $"https://api.twitter.com/1.1/search/tweets.json?q={searchItem}&result_type=popular&count=5";
            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {

                if (response.IsSuccessStatusCode)
                {
                    var tweetResponse = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(tweetResponse);
                    return  JsonSerializer.Deserialize<Tweets>(tweetResponse);
                }
                
                throw new Exception(response.ReasonPhrase);
            }
        }
    }
}


// // Windows
// using var jsonFile = File.OpenText(@"C:\git\twitter-asp.net.core\API\Data\mockdata.json");
//
// // Linux
// // using var jsonFileReader = File.OpenText(@"/home/stanzu10/Development/git/twitter-showcase/API/Data/mockdata.json");
// string jsonText = jsonFile.ReadToEnd();
//
// return  JsonSerializer.Deserialize<Tweets>(jsonText);
