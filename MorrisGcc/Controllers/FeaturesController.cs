using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MorrisGcc.Models;

namespace MorrisGcc.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FeaturesController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Features> Get()
        {
            MorrisDBContext context = HttpContext.RequestServices.GetService(typeof(MorrisDBContext)) as MorrisDBContext;
            return context.GetFeatures();
        }
    }
}