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
        Task<object> GetTweets(string url, bool individual = false);
    }

    public class JsonTweetsService : IJsonTweetsService
    {
        private IJsonTweetsService _jsonTweetsServiceImplementation;



        public async Task<object> GetTweets(string url, bool individual = false)
        {

            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    var tweetResponse = await response.Content.ReadAsStringAsync();
                    if (!individual)
                        return JsonSerializer.Deserialize<Tweets>(tweetResponse);
                    
                    return JsonSerializer.Deserialize<List<Tweet>>(tweetResponse);
                }
                throw new Exception(response.ReasonPhrase);
            }
        }
        
    }
    
  
}
