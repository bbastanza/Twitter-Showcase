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
        Tweets SearchTweetsByContent(string searchTerm);
        List<Tweet> SearchUserTimelineTweets(string searchTerm, int count);
    }

    public class JsonTweetsService : IJsonTweetsService
    {
        private readonly HttpClient _client;

        public JsonTweetsService(IApiHelper apiHelper)
        {
            _client = apiHelper.InitializeClient();
        }

        public Tweets SearchTweetsByContent(string searchTerm)
        {
            var url =
                $"https://api.twitter.com/1.1/search/tweets.json?q={searchTerm}&result_type=popular&count=5&tweet_mode=extended";

            var tweetResponse = GetTweets(url);

            return JsonSerializer.Deserialize<Tweets>(tweetResponse.Result);
        }

        public List<Tweet> SearchUserTimelineTweets(string searchTerm, int count)
        {
            var url =
                $"https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name={searchTerm}&count={count}&tweet_mode=extended";

            var tweetResponse = GetTweets(url);

            return JsonSerializer.Deserialize<List<Tweet>>(tweetResponse.Result);
        }

        private async Task<string> GetTweets(string url)
        {
            using var response = await _client.GetAsync(url);

            if (response.IsSuccessStatusCode)
                return await response.Content.ReadAsStringAsync();

            throw new Exception("error in JsonTweetService");
        }
    }
}
