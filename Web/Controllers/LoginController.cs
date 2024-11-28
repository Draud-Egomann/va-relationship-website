using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        // Serve the login page
        [HttpGet]
        public IActionResult Index()
        {
            return View(); // Serve a simple login page (Login.cshtml)
        }

        // Handle login requests
        [HttpPost]
        public async Task<IActionResult> Authenticate(string password)
        {
            const string correctPassword = "your-password"; // Replace with your secure password mechanism

            if (password == correctPassword)
            {
                var claims = new List<Claim> { new Claim(ClaimTypes.Name, "User") };
                var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimsIdentity));

                return Redirect("/");
            }

            TempData["Error"] = "Invalid password";
            return RedirectToAction("Index");
        }

        // Logout
        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index");
        }
    }
}
