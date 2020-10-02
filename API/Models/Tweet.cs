using System.Collections.Generic;
using System.Dynamic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace twitter_showcase
{
    
    public class Tweets
    {
        [JsonPropertyName("statuses")]
        public List<Tweet> Statuses { get; set; }
    }
    public class Tweet
    {
        [JsonPropertyName("id")]
        public long Id { get; set; }
        [JsonPropertyName("source")]
        public string Source { get; set; }
        [JsonPropertyName("user")]
        public User User { get; set; }
        [JsonPropertyName("created_at")]
        public string Date { get; set; }
        [JsonPropertyName("text")]
        public string Text { get; set; }
        [JsonPropertyName("favorite_count")]
        public int LikeCount { get; set; }
        [JsonPropertyName("retweet_count")]
        public int RetweetCount { get; set; }

        public override string ToString() => JsonSerializer.Serialize<Tweet>(this);
        
    }
    public class User
    {
        [JsonPropertyName("id")]
        public long Id { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("screen_name")]
        public string ScreenName { get; set; }

        [JsonPropertyName("description")]
        public string Description { get; set; }
        [JsonPropertyName("verified")]
        public bool Verified { get; set; }
        [JsonPropertyName("profile_image_url_https")]
        public string ProfileImageUrlHttps { get; set; }


    }
}