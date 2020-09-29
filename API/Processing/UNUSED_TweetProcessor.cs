using System.Net.Http;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Collections.Generic;
using twitter_showcase;


namespace API
{
    public static class TweetProcessor
    {
        public static async Task<Object> FetchTweets(string searchItem)
        {
            string url = $"https://api.twitter.com/1.1/search/tweets.json?q={searchItem}&result_type=popular&count=5";
            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    Tweet tweet = await response.Content.ReadAsAsync<Tweet>();
                    return tweet;
                }
                else
                {
                    throw new Exception(response.ReasonPhrase);
                }
            }
        
        }
        
    }
}