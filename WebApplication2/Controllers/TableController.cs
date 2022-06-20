using Microsoft.AspNetCore.Mvc;

namespace WebApplication2.Controllers
{
    public class TableController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Tablecontent()
        {
            return View();
        }
    }
}
