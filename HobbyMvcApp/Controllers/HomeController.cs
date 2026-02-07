using Microsoft.AspNetCore.Mvc;

namespace HobbyMvcApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Calculator()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}