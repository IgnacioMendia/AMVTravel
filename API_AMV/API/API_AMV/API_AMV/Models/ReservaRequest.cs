using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_AMV.Models
{
    public class ReservaRequest
    {
        public int TourId { get; set; }
        public int Cliente { get; set; }
    }
}