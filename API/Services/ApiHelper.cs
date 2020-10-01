using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.AccessControl;

namespace API
{
    public static class ApiHelper
    {
        public static HttpClient ApiClient { get; set; }

        public static void InitializeClient()
        {
            ApiClient = new HttpClient();
            ApiClient.DefaultRequestHeaders.Accept.Clear();
            ApiClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", "AAAAAAAAAAAAAAAAAAAAAEkGIAEAAAAAd48lpFF5oUBNm%2FiTE88EnzYspIs%3DnKMWsK5JsW5JkWIjh9amsXErAgEfJjfpwBvvwiu2QHLomTMXuS");
            ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
    }
}