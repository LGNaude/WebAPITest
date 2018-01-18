using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeckoWebAPITest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult TestAPI()
        {
            return View();
        }

        [Route("home/testme")]
        public ActionResult TestMe()
        {
            return View("Index");
        }
    }
}
