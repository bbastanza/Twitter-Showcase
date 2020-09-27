using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Web;



using Microsoft.AspNetCore.Hosting;
using JsonSerializer = Newtonsoft.Json.JsonSerializer;

namespace twitter_showcase.Services
{
    public class JsonFileTweetService
    {
        public JsonFileTweetService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        public string JsonFileName = @"C:\git\twitter-showcase\aspdotnet\twitter-showcase\Data\mockdata.json";
        public string jsonString = File.ReadAllText(@"C:\git\twitter-showcase\aspdotnet\twitter-showcase\Data\mockdata.json");
        public void GetTweets()
        {

            Console.WriteLine(jsonString);

        }
 

    }

}