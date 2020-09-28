using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class TestTweet
    {

        public class Rootobject
        {
            public List<Status> statuses { get; set; }
        }


        public class Status
        {
            public string created_at { get; set; }
            public long id { get; set; }
            public string text { get; set; }
            public string source { get; set; }
            public User user { get; set; }
            public int retweet_count { get; set; }
            public int favorite_count { get; set; }

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
}

      
