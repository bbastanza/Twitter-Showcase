using System.Collections.Generic;
using System.Dynamic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace twitter_showcase
{
    
    public class Rootobject
    {
        public List<Tweet> statuses { get; set; }
    }
    public class Tweet
    {
        [JsonPropertyName("id")]
        public long Id { get; set; }
        [JsonPropertyName("source")]
        public string Source { get; set; }
        [JsonPropertyName("user")]
        public User user { get; set; }
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
        public long id { get; set; }
        public string name { get; set; }
        public string screen_name { get; set; }
        public string description { get; set; }
        public bool verified { get; set; }
        public string profile_image_url_https { get; set; }


    }
}