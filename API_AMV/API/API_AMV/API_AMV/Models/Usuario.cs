using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API_AMV.Models
{
    public class Usuario
    {
        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}