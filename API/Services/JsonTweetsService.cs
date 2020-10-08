using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using API.Models;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace API.Services
{        
    public interface IJsonTweetsService
    {
        Task<object> GetTweets(string url, bool individual = false);
    }

    public class JsonTweetsService : IJsonTweetsService
    {
        public async Task<object> GetTweets(string url, bool individual = false)
        {
            using HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url);
            if (response.IsSuccessStatusCode)
            {
                var tweetResponse = await response.Content.ReadAsStringAsync();
                if (!individual)
                    return JsonSerializer.Deserialize<Tweets>(tweetResponse);
                    
                return JsonSerializer.Deserialize<List<Tweet>>(tweetResponse);
            }
            throw new Exception("error in JsonTweetService");
        }
    }
}
