using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MorrisGcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LandingPageFeaturesController : ControllerBase
    {
        
        private static string ReadTitle(int id)
        {
            var result= id switch
            {
                1 => "Installation of lifts and escalators & elevators in UAE",
                2 => "Maintenance after Sale and Sustainable care",
                3 => "Replacement of lifts and escalators",
                4 => "Consulting and development solutions",
                _ => "Installation of lifts and escalators & elevators in UAE",
            };
            return result;
        }

        private static string ReadContent(int id)
        {
            var result= id switch
            {
                1 => "We do provide installation and service maintanance all over uae",
                2 => "It's a long term work relationship. You are a family not a client to us.",
                3 => "Want to replace your old outdated lifts and escalators? Let us know",
                4 => "We have solutions not only to lifts and elevators. We are one stop solution for your problems",
                _ => "We do provide installation and service maintanance all over uae",
            };
            return result;
        }
        

        [HttpGet]
        public IEnumerable<LandingPageFeatures> Get()
        {
            return Enumerable.Range(1, 4).Select(index => new LandingPageFeatures
            {
                Title = ReadTitle(index),
                Content=ReadContent(index)
            })
            .ToArray();
        }
    }
}
