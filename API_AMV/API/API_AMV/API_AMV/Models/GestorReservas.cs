using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_AMV.Models
{
    public class GestorReservas
    {
        public static List<Tour> lstTour { get; set; }
        public static List<Reserva> lstReserva { get; set; }

        static GestorReservas()
        {
            lstTour = new List<Tour>
            {
                new Tour { Id = 1, Nombre = "Economico", Destino = "Mar del Plata", FechaInicio = new DateTime(2023, 8, 1), FechaFin = new DateTime(2023, 8, 7), Precio = 500.00 },
                new Tour { Id = 2, Nombre = "Lujo", Destino = "Cancún", FechaInicio = new DateTime(2023, 12, 15), FechaFin = new DateTime(2023, 12, 22), Precio = 2500.00 },
                new Tour { Id = 3, Nombre = "Aventura", Destino = "Patagonia", FechaInicio = new DateTime(2024, 1, 10), FechaFin = new DateTime(2024, 1, 20), Precio = 1500.00 }
            };

            lstReserva = new List<Reserva>
            {
                new Reserva{ Id= 1, FechaReserva= new DateTime(2023, 8, 1), IdCliente=3, TourId= 1},
                new Reserva{ Id= 2, FechaReserva= new DateTime(2023, 9, 1), IdCliente=2, TourId= 2},
                new Reserva{ Id= 3, FechaReserva= new DateTime(2023, 10, 1), IdCliente=1, TourId= 3}
            };
        }

        public static bool AgregarTour(Tour objTour)
        {
            try
            {
                lstTour.Add(objTour);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static List<Tour> MostrarTours()
        {
            try
            {
                return lstTour;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static Tour MostrarToursPorId(int id)
        {
            try
            {
                return lstTour.Where(x => x.Id == id).FirstOrDefault();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public static bool ReservarTour(ReservaRequest reserva)
        {
            try
            {
                int UltimoId = lstReserva.Select(x => x.Id).LastOrDefault();
                Reserva objReserva = new Reserva()
                {
                    Id = UltimoId++,
                    IdCliente = reserva.Cliente,
                    FechaReserva = DateTime.Now,
                    TourId = reserva.TourId
                };
                lstReserva.Add(objReserva);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public static List<Reserva> MostrarReservas(int cliente)
        {
            try
            {
                List<Reserva> lstReservaPorCliente = lstReserva.Where(x => x.IdCliente == cliente).OrderBy(x => x.FechaReserva).ToList();
                return lstReservaPorCliente;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

}