using System.Net.Http;
using System.Net.Http.Headers;
using Microsoft.Extensions.Configuration;

namespace API.Services
{
    public interface IApiHelper
    {
        HttpClient InitializeClient();
    }
    
    public class ApiHelper: IApiHelper
    {
        private readonly IConfiguration _configuration;

        public ApiHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public HttpClient InitializeClient()
        {
            var bearerToken = _configuration["Twitter_Key:BearerToken"];

            var apiClient = new HttpClient();
            apiClient.DefaultRequestHeaders.Accept.Clear();
            apiClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", bearerToken);
            apiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json")); 

            return apiClient;
        }
    }
}
