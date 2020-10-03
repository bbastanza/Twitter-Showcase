using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace API.Models
{

    public class Tweets
    {
        [JsonPropertyName("statuses")] public List<Tweet> Statuses { get; set; }
    }

    public class Tweet
    {
        [JsonPropertyName("id")] public long Id { get; set; }
        [JsonPropertyName("source")] public string Source { get; set; }
        [JsonPropertyName("user")] public User User { get; set; }
        [JsonPropertyName("entities")] public Entities Entities { get; set; }
        [JsonPropertyName("created_at")] public string Date { get; set; }
        [JsonPropertyName("full_text")] public string Text { get; set; }

        public string FormattedText
        {
            get
            {
                var formattedText = Text;
  
                if (formattedText.Contains("http") && Entities.Urls.Count != 0)
                {
                    var textWithoutLink = formattedText.Substring(0, Text.IndexOf("http", StringComparison.Ordinal)) + " ";
                        formattedText = textWithoutLink +
                                        $"<a href={Entities.Urls[0].url} target='_blank'>Link</a>";
                }
                else if (formattedText.Contains("http") && Entities.Media.Count != 0)
                {
                    var textWithoutLink = formattedText.Substring(0, Text.IndexOf("http", StringComparison.Ordinal)) + " ";
                        formattedText = textWithoutLink +
                                        $"<a href={Entities.Media[0].Media_url} target='_blank'>Link</a>";
                }
                return formattedText;
            }
        }
        [JsonPropertyName("favorite_count")] public int LikeCount { get; set; }
        [JsonPropertyName("retweet_count")] public int RetweetCount { get; set; }
    }

    public class User
    {
        [JsonPropertyName("id")] public long Id { get; set; }
        [JsonPropertyName("name")] public string Name { get; set; }
        [JsonPropertyName("screen_name")] public string ScreenName { get; set; }
        [JsonPropertyName("description")] public string Description { get; set; }
        [JsonPropertyName("verified")] public bool Verified { get; set; }
        [JsonPropertyName("profile_image_url_https")]
        public string ProfileImageUrlHttps { get; set; }
    }

    public class Entities
    {
        [JsonPropertyName("urls")] public List<Url> Urls { get; set; }
        [JsonPropertyName("media")] public List<Media> Media { get; set; }
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