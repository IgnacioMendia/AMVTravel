using API_AMV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API_AMV.Controllers
{
    public class ReservaController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage MostrarReservas(int idCliente)
        {
            try
            {
                List<Reserva> tours = GestorReservas.MostrarReservas(idCliente);
                foreach (var item in tours)
                {
                    var objTour = GestorReservas.MostrarToursPorId(item.TourId);
                    item.Tour = objTour;
                }
                return Request.CreateResponse(HttpStatusCode.OK, tours);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }

        [HttpPost]
        public HttpResponseMessage AgregarReserva([FromBody] ReservaRequest reserva)
        {
            try
            {
                List<Tour> lstToursDisponibles = GestorReservas.MostrarTours();
                var Tour = lstToursDisponibles.Where(x => x.Id == reserva.TourId).ToList();
                if (Tour.Count == 0 )
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "El tour especificado no existe");
                }
                else
                {
                    bool flag = GestorReservas.ReservarTour(reserva);
                    if (flag)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, flag);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Failed to add tour.");
                    }
                }
                
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
