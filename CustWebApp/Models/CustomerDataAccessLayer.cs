using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CustWebApp.Models;
using System.Diagnostics;

namespace CustWebApp.Models
{
    public class CustomerDataAccessLayer
    {
        gurudbContext db = new gurudbContext();

        public IEnumerable<TblCustomers> GetAllCustomers()
        {
            try
            {
                return db.TblCustomers.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new customer record   
        public int AddCustomer(TblCustomers customer)
        {
            try
            {
                db.TblCustomers.Add(customer);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar customer  
        public int UpdateCustomer(TblCustomers customer)
        {
            try
            {
                db.Entry(customer).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular customer  
        public TblCustomers GetCustomerData(int id)
        {
            try
            {
                TblCustomers customer = db.TblCustomers.Find(id);
                Debug.Print("First name is: " + customer.firstname);
                return customer;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular customer  
        public int DeleteCustomer(int id)
        {
            TblCustomers cust = db.TblCustomers.Find(id);
            db.TblCustomers.Remove(cust);
            db.SaveChanges();
            return 1;
        }
    }
}
