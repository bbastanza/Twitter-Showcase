using System.Dynamic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace twitter_showcase
{
    public class Tweet
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }
        [JsonPropertyName("source")]
        public string Source { get; set; }
        [JsonPropertyName("user.profile_image_url_https")]
        public string ProfileImageUrl { get; set; }
        [JsonPropertyName("user.screen_name")]
        public string UserName { get; set; }
        [JsonPropertyName("user.name")]
        public string DisplayName { get; set; }
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
}