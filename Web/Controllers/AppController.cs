using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [ApiController]
    [Route("")]
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            var contenType = "text/html";

            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "VueApp", "dist", "index.html");
            return PhysicalFile(filePath, contenType);
        }
    }
}
