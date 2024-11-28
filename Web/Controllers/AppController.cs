using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [ApiController]
    [Route("")]
    public class AppController : Controller
    {
        [Authorize]
        public IActionResult Index()
        {
            return PhysicalFile("VueApp/dist/index.html", "text/html");
        }
    }
}
