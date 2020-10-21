using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class Entities
    {
        public string Link
        {
            get
            {
                if (this.Media != null && this.Media.Count > 0) return this.Media[0].Media_url;
                if (this.Urls != null && this.Urls.Count > 0) return this.Urls[0].url;
                return null;
            }
        }
        [JsonPropertyName("urls")]
        public List<Url> Urls { get; set; }
        [JsonPropertyName("media")]
        public List<Media> Media { get; set; }
    }
    public class Media
    {
        [JsonPropertyName("url")] 
        public string Media_url { get; set; }
    }
    
    public class Url
    {
        [JsonPropertyName("url")]
        public string url { get; set; }            
    }
}