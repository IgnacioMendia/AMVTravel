using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_AMV.Models
{
    public class Tour
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Destino { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public double Precio { get; set; }

    }
}