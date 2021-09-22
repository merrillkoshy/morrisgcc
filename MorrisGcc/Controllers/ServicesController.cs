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
    public class ServicesController : ControllerBase
    {
        

        public class Service
        {
            public string Title { get; set; }
            public string ServiceContent { get; set; }
            public string ServiceUrl { get; set; }
            public Service(string title, string content, string url)
            {
                Title = title;
                ServiceContent = content;
                ServiceUrl = url;
            }
        }
        public string ReadTitle(int id)
        {
            var result = id switch
            {
                0 => "Maintenance",
                1 => "Modernization",
                2 => "Installation",
                _ => "Maintenance"
            };
            return result;
        }
        public string ReadContent(int id)
        {
            var result = id switch
            {
                0 => "Morris Elevators are one of the leading elevator companies in UAE, We have highly qualified teams and employees who are specialized in importing and installing different types of elevators and lifts.",
                1 => "We consider lifts as an aesthetic not only an efficient machine, We enriches the image of any facility by providing modern designs which suits the spirit of your building which is appealing for the general aesthetics of the building",
                2 => "We are 24/7 available for your emergency cases with raprid response. Our team has highly skilled qualified experts and technicians on one click away from your doorstep. We also offer annual lift maintenance contracts that include troubleshooting and will provide original spare parts.",
                _ => "Morris Elevators are one of the leading elevator companies in UAE, We have highly qualified teams and employees who are specialized in importing and installing different types of elevators and lifts."
            };
            return result;
        }
        public string ReadUrl()
        {

            return "http://morrisgcc.com/page/services";
        }
        [HttpGet]
        public IEnumerable<ServiceClass> Get()
        {

            return Enumerable.Range(0,2).Select(idx=>new ServiceClass {
                Title=ReadTitle(idx),
                ServiceContent= ReadContent(idx),
                ServiceUrl= ReadUrl()
            });
        }


    }
}