using System.Collections.Generic;
using InfiniteScrollerDemo.Models;
using Microsoft.AspNetCore.Mvc;

namespace InfiniteScrollerDemo.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public ItemBoxViewModel LoadItemsBottom(int topItemNumber)
        {
            var tempPictures = new List<PictureData>();

            for (var i = 0; i < 8; i++)
            {
                tempPictures.Add(new PictureData
                {
                    Url = $"dog{i}.jpg",
                    Summary = $"summary of picture {topItemNumber++}"
                });
            }

            return new ItemBoxViewModel
            {
                Pictures = tempPictures,
                Status = "OK"
            };
        }
    }
}
