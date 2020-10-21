using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace API.Models
{
    public class ExtendedEntities
    {
        [JsonPropertyName("media")] 
        public List<ExtendedMedia> ExtendedMedia { get; set; }
    }
    public class ExtendedMedia
    {
        [JsonPropertyName("media_url_https")]
        public string ExtendedMediaUrl { get; set; }
    }
}