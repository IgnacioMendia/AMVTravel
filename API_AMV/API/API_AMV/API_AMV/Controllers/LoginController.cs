using API_AMV.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API_AMV.Controllers
{
    public class LoginController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage Login([FromBody]LoginRequest objLogin)
        {
            try
            {
                Usuario objUsuario = new Usuario() { Email = "mendiaignacio@gmail.com", Password = "1234", IdUsuario= 1 };
                if (!string.IsNullOrEmpty(objLogin.Email) || !string.IsNullOrEmpty(objLogin.Password))
                {
                    if (objUsuario.Email == objLogin.Email && objUsuario.Password == objLogin.Password)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, objUsuario);
                    }
                    else
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.Unauthorized, "401");
                    }
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.InternalServerError,"400");
                }
            }
            catch (Exception)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "500");
            }
        }
    }
}
