using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Text.Json;
using System.Threading.Tasks;

using twitter_showcase;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace API.Services
{        
    public interface IJsonTweetsService
    {
        Task<Tweets> GetTweets(string searchItem);
    }

    public class JsonTweetsService : IJsonTweetsService
    {
        public async Task<Tweets> GetTweets(string searchItem)
        {
            string url = $"https://api.twitter.com/1.1/search/tweets.json?q={searchItem}&result_type=popular&count=5";
            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    var tweetResponse = await response.Content.ReadAsStringAsync();
                    return  JsonSerializer.Deserialize<Tweets>(tweetResponse);
                }
                throw new Exception(response.ReasonPhrase);
            }
        }
    }
}
