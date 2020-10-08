using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class Entities
    {
        [JsonPropertyName("urls")] public static List<Url> Urls { get; set; }
        [JsonPropertyName("media")] public static List<Media> Media { get; set; }
        public string Link
        {
            get
            {
                if (Entities.Urls != null && Entities.Urls.Count > 0) return Entities.Urls[0].url;
                if (Entities.Media != null && Entities.Media.Count > 0) return Entities.Media[0].Media_url;
                return null;
            }
        }
    }
    public class Media
    {
        [JsonPropertyName("url")] public string Media_url { get; set; }
    }
    
    public class Url
    {
        [JsonPropertyName("url")]
        public string url { get; set; }            
    }
}