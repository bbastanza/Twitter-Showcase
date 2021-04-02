using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace API.Models
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
        
        [JsonPropertyName("entities")] 
        public Entities Entities { get; set; }
        
        [JsonPropertyName("extended_entities")] 
        public ExtendedEntities ExtendedEntities { get; set; }
        
        [JsonPropertyName("created_at")] 
        public string Date { get; set; }
        
        [JsonPropertyName("full_text")] 
        public string Text { get; set; }
        
        [JsonPropertyName("favorite_count")] 
        public int LikeCount { get; set; }
        
        [JsonPropertyName("retweet_count")] 
        public int RetweetCount { get; set; }
        
        public string FormattedText
        {
            get
            {
                var formattedText = Text;
                if (formattedText.Contains("http")) formattedText = AddLink(formattedText);
                if (formattedText.Contains("@")) formattedText = AddMentions(formattedText);
                return $"<p>{formattedText}</p>";
            }
        }

        private string AddLink(string text)
        {
            if (!String.IsNullOrEmpty(text) && Entities.Link != null)
                return $"{text.Substring(0, Text.IndexOf("http", StringComparison.Ordinal))} " +
                       $"<a href={Entities.Link} target='_blank'>Link</a>";
            return text;
        }

        private string AddMentions(string text)
        {
            var words = text.Split(" ");
            var updatedText = new List<string>();

            foreach (string word in words)
                if (word.Length > 1 && word[0] == '@')
                {
                    var searchTerm = word.Remove(0, 1);
                    var mention = new StringBuilder();
                    var link = mention.Append(searchTerm)
                        .Insert(0, (@"<a href='/Search?q=" + searchTerm + @"'>@"))
                        .Append("</a>")
                        .ToString();
                    updatedText.Add(link);
                }
                else
                    updatedText.Add(word);

            return String.Join(' ', updatedText);
        }
    }
}