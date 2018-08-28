using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

namespace TechTest.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment env;

        public HomeController(IHostingEnvironment _env)
        {
            if(_env==null)
                throw new ArgumentNullException(nameof(_env));

            env = _env;
        }
        public IActionResult Index()
        {
            ViewData["URL"] = this.ControllerContext.HttpContext.Request.PathBase.Value;
            ViewBag.qwer = "qwer";
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
