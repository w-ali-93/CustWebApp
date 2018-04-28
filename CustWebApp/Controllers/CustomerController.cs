using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustWebApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CustWebApp.Controllers
{
    public class CustomerController : Controller
    {
        CustomerDataAccessLayer objCustomer = new CustomerDataAccessLayer();

        [HttpGet]
        [Route("api/Customer/Index")]
        public IEnumerable<TblCustomers> Index()
        {
            return objCustomer.GetAllCustomers();
        }

        [HttpPost]
        [Route("api/Customer/Create")]
        public int Create([FromBody] TblCustomers customer)
        {
            return objCustomer.AddCustomer(customer);
        }

        [HttpGet]
        [Route("api/Customer/Details/{id}")]
        public TblCustomers Details(int id)
        {
            return objCustomer.GetCustomerData(id);
        }

        [HttpPut]
        [Route("api/Customer/Edit")]
        public int Edit([FromBody] TblCustomers customer)
        {
            return objCustomer.UpdateCustomer(customer);
        }

        [HttpDelete]
        [Route("api/Customer/Delete/{id}")]
        public int Delete(int id)
        {
            return objCustomer.DeleteCustomer(id);
        }
    }
}