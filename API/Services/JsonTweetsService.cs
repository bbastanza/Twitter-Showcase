using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System.Text.Json;
using twitter_showcase;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace API.Services
{
    public class JsonTweetsService
    {
        public JsonTweetsService(IHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = (IWebHostEnvironment) webHostEnvironment;
        }
        
        public IWebHostEnvironment WebHostEnvironment { get; }


 

        public static List<Tweet> GetTweets()
        {
            using var jsonFileReader = File.OpenText(@"C:\git\twitter-asp.net.core\API\Data\mockdata.json");
            return JsonSerializer.Deserialize<List<Tweet>>(jsonFileReader.ReadToEnd(),
                new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
        }
    }
}

// using System.Collections.Generic;
// using System.IO;
// using System.Linq;
// using System.Text.Json;
// using ContosoCrafts.WebSite.Models;
// using Microsoft.AspNetCore.Hosting;
//
// namespace ContosoCrafts.WebSite.Services
// {
//     public class JsonFileProductService
//     {
//         public JsonFileProductService(IWebHostEnvironment webHostEnvironment)
//         {
//             WebHostEnvironment = webHostEnvironment;
//         }
//
//         public IWebHostEnvironment WebHostEnvironment { get; }
//
//         private string JsonFileName
//         {
//             get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "products.json"); }
//         }
//
//         public IEnumerable<Product> GetProducts()
//         {
//             using(var jsonFileReader = File.OpenText(JsonFileName))
//             {
//                 return JsonSerializer.Deserialize<Product[]>(jsonFileReader.ReadToEnd(),
//                     new JsonSerializerOptions
//                     {
//                         PropertyNameCaseInsensitive = true
//                     });
//             }
//         }