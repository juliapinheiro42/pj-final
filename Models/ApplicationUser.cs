using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRifugo.Models
{
    public class ApplicationUser : IdentityUser
    {
        public String Celular { get; set; } 

        public String Cpf { get; set; }
    }
}
