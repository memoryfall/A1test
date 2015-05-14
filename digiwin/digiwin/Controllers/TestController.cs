using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using digiwin.Models;
namespace digiwin.Controllers
{
    public class TestController : ApiController
    {
      
        public IEnumerable<digiwinuser> Get()
        {
            digiwinEntities db = new digiwinEntities();
            var data = from item in db.digiwinuser orderby item.userId select item;
            return data.ToList();

        }
        public digiwinuser Get(int id){
            digiwinEntities db = new digiwinEntities();
            var data=from item in db.digiwinuser where item.userId==id select item;
            return data.SingleOrDefault();
        }
        public Boolean Get(String name, String password)
        {
            digiwinEntities db = new digiwinEntities();
            var data = from item in db.digiwinuser where item.userName == name & item.userPass == password select item;
            if (data.SingleOrDefault() == null) {
                return false;
            }
            else
            {
                return true;
            }

        }
        public Boolean Post(digiwinuser obj)
        {
            digiwinEntities db = new digiwinEntities();
            db.digiwinuser.Add(obj);
            db.SaveChanges();
            return true;
        }
        public void Put(int id, digiwinuser obj)
        {
            digiwinEntities db = new digiwinEntities();
            var data = from item in db.digiwinuser where item.userId == id select item;
            digiwinuser old = data.SingleOrDefault();
            old.userName = obj.userName;
            old.userPass = obj.userPass;
            db.SaveChanges();
        }
        public void Delete(int id)
        {
            digiwinEntities db = new digiwinEntities();
            var data = from item in db.digiwinuser where item.userId == id select item;
            digiwinuser old = data.SingleOrDefault();
            db.digiwinuser.Remove(old);
            db.SaveChanges();
        }
    }
}
