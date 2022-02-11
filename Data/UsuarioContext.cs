using Microsoft.EntityFrameworkCore;
using ProjetoRifugo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRifugo.Data
{
    public class UsuarioContext : DbContext
    {
        public UsuarioContext()
        {

        }

        public UsuarioContext(DbContextOptions<UsuarioContext> options) : base(options)
        {

        }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}
