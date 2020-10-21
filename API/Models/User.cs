using System.Text.Json.Serialization;

namespace API.Models
{
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