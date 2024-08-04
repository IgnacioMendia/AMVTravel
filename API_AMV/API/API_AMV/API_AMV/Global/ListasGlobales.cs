using API_AMV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_AMV.Global
{
    public class ListasGlobales
    {
        public static List<Tour> lstTour = new List<Tour>
            {
                new Tour { Id = 1, Nombre = "Economico", Destino = "Mar del Plata", FechaInicio = new DateTime(2023, 8, 1), FechaFin = new DateTime(2023, 8, 7), Precio = 500.00 },
                new Tour { Id = 2, Nombre = "Lujo", Destino = "Cancún", FechaInicio = new DateTime(2023, 12, 15), FechaFin = new DateTime(2023, 12, 22), Precio = 2500.00 },
                new Tour { Id = 3, Nombre = "Aventura", Destino = "Patagonia", FechaInicio = new DateTime(2024, 1, 10), FechaFin = new DateTime(2024, 1, 20), Precio = 1500.00 }
        };

    }
}