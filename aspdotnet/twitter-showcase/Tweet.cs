using System.Text.Json;
using System.Text.Json.Serialization;

namespace twitter_showcase
{
    public class Tweet
    {
        public string Source { get; set; }
        public string ProfileImageUrl { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string Date { get; set; }
        public string Text { get; set; }
        [JsonPropertyName("likes")]
        public int LikeCount { get; set; }
        public int RetweetCount { get; set; }

        public override string ToString() => JsonSerializer.Serialize<Tweet>(this);
        
    }
}