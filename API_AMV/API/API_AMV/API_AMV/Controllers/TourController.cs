using API_AMV.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API_AMV.Controllers
{
    public class TourController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage MostrarTours()
        {
            try
            {
                List<Tour> tours = GestorReservas.MostrarTours();
                return Request.CreateResponse(HttpStatusCode.OK, tours);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        public HttpResponseMessage AgregarTour([FromBody] Tour tour)
        {
            try
            {
                bool flag = GestorReservas.AgregarTour(tour);
                if (flag)
                {
                    return Request.CreateResponse(HttpStatusCode.OK);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Failed to add tour.");
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
