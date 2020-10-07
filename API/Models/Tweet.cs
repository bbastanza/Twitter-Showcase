using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Routing;


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

                
                if (formattedText.Contains("http"))
                {
                    try
                    {
                        var linkUrl = Entities.Urls[0].url;
                        formattedText =
                            $"{formattedText.Substring(0, Text.IndexOf("http", StringComparison.Ordinal))} " +
                            $"<a href={linkUrl} target='_blank'>Link</a>";
                    }
                    catch 
                    {
                        try
                        {
                            var mediaUrl = Entities.Media[0].Media_url;
                            formattedText = $"{formattedText.Substring(0, Text.IndexOf("http", StringComparison.Ordinal))} " +
                                            $"<a href={mediaUrl} target='_blank'>Link</a>";
                        }
                        catch 
                        {
                            Console.WriteLine("Exception: Formatted Text => There was no link...");
                        }
                    }

                }
  
                
                if (formattedText.Contains("@"))
                {

                    var words = formattedText.Split(" ");
                    var updatedText = new List<string>();
                    foreach (string word in words)
                    {
                        Console.WriteLine(word);
                        if (word[0] == '@')
                        {
                            var wordWithoutAt = word.Remove(0, 1);
                            var mention = new StringBuilder();
                            mention.Append(wordWithoutAt);
       
                            mention.Insert(0, (@"<a href='/Search?searchTerm={" + wordWithoutAt + @"}'>@"));
                            mention.Append("</a>");
                            var link = mention.ToString();
                            updatedText.Add(link);
                        }else 
                            updatedText.Add(word);

                    }
                    return $"<p>{String.Join(' ', updatedText)}</p>";
                }
                return  $"<p>{formattedText}</p>";
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

        [JsonPropertyName("user_mentions")]
        public List<UserMention> UserMentions{ get; set; }
    }
    
    public class UserMention
    {
        [JsonPropertyName("screen_name")] public string MentionScreenName { get; set; }
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

// onClick={mentionSearch('"
//     + mentions[mentionIndex].MentionScreenName
// + @"', 'user')} 