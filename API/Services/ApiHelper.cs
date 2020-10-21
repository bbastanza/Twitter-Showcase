using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.Extensions.Configuration;

namespace API.Services
{
    public interface IApiHelper
    {
        HttpClient ApiClient { get; }
    }
    
    
    public class ApiHelper: IApiHelper
    {
        public HttpClient ApiClient { get; }

        public ApiHelper(IConfiguration configuration)
        {
   
            var bearerToken = configuration["Twitter_Key:BearerToken"];
            ApiClient = new HttpClient();
            ApiClient.DefaultRequestHeaders.Accept.Clear();
            ApiClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", bearerToken);
            ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json")); 
        }
    }
}