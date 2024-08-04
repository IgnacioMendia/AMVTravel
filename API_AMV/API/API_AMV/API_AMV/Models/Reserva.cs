using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_AMV.Models
{
    public class Reserva
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        public DateTime FechaReserva { get; set; }
        public int TourId { get; set; }
        public Tour Tour { get; set; }
    }
}