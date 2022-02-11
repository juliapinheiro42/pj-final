using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjetoRifugo.Models;

namespace ProjetoRifugo.Data
{
    public class TradutorContext : DbContext
    {
        public TradutorContext()
        {

        }

        public TradutorContext(DbContextOptions<TradutorContext> options) : base(options)
        {

        }

        public DbSet<Tradutor> Tradutores { get; set; }
    }
}

