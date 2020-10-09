using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.Extensions.Configuration;

namespace API.Services
{
    public static class ApiHelper
    {
        public static HttpClient ApiClient { get; set; }
        private static IConfiguration _configuration;



        public static void InitializeClient(IConfiguration configuration)
        {
            _configuration = configuration;
            var bearerToken = _configuration["Twitter_Key:BearerToken"];
            ApiClient = new HttpClient();
            ApiClient.DefaultRequestHeaders.Accept.Clear();
            ApiClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", bearerToken);
            ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
    }
}