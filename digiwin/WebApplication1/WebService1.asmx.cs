using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using MySql.Data.MySqlClient;
using System.Data;
using System.Text;
namespace WebApplication1
{
  
    public class WebService1 : System.Web.Services.WebService
    {
        Boolean exituser = false;
        [WebMethod]
        public void Login(String name,String password,String status)
        {
            try
            {
                MySqlConnection con = new MySqlConnection("Database=digiwin;DataSource=localhost;UserId=root;Password=root");
                con.Open();
                MySqlCommand cmd = con.CreateCommand();
                cmd.CommandText = "select * from digiwinuser where userName=@name";
                cmd.Parameters.AddWithValue("@name", name);
                MySqlDataReader reder = cmd.ExecuteReader();
                try
                {
                    while (reder.Read())
                    {
                        if (reder.HasRows)
                        {
                            exituser = true;
                            if (status =="0")
                            {
                                if (reder.GetString(2) == password)
                                {
                                    Context.Response.Write("{\"user\":[{\"status\":\"true\"}]}");
                                    break;
                                }
                                else
                                {
                                    Context.Response.Write("{\"user\":[{\"status\":\"fale\"}]}");
                                }
                            }
                            else if (status =="1")
                            {
                                Context.Response.Write("{\"user\":[{\"status\":\"" + exituser + "\",\"password\":\"" + reder.GetString(2) + "\"}]}");
                                exituser = false;
                                break;
                            }
                        }
                    }
                }
                catch (Exception e)
                {

                }
                con.Close();
            }
            catch (Exception e)
            {
            }
        }
        [WebMethod]
        public void insertUser(String name, String password)
        {
            serchUser(name, password);
            if (exituser)
            {
                Context.Response.Write("{\"user\":[{\"status\":\"exits\"}]}");
                exituser = false;
            }
            else
            {
                try
                {
                    MySqlConnection con = new MySqlConnection("Database=digiwin;DataSource=localhost;UserId=root;Password=root");
                    con.Open();
                    MySqlCommand cmd = con.CreateCommand();
                    cmd.CommandText = "insert into digiwinuser(userName,userPass) values(@name,@password)";
                    cmd.Parameters.AddWithValue("@name", name);
                    cmd.Parameters.AddWithValue("@password", password);
                    cmd.ExecuteNonQuery();
                    con.Close();
                    Context.Response.Write("{\"user\":[{\"status\":\"true\"}]}");
                }
                catch (Exception e)
                {
                }
            }
        }
        [WebMethod]
        public Boolean serchUser(String Name, String Password)
        {

            try
            {
                MySqlConnection con = new MySqlConnection("Database=digiwin;DataSource=localhost;UserId=root;Password=root");
                con.Open();
                MySqlCommand cmd = con.CreateCommand();
                cmd.CommandText = "select * from digiwinuser where userName=@name";
                cmd.Parameters.AddWithValue("@name", Name);
                MySqlDataReader reder = cmd.ExecuteReader();
                try
                {
                    while (reder.Read())
                    {
                        if (reder.HasRows)
                        {
                            exituser = true;
                            if (reder.GetString(1) == Password)
                            {
                                return true;
                            }
                            else
                            {
                                return false;
                            }
                        }
                    }
                }
                catch (Exception e)
                {

                }
                con.Close();
            }
            catch (Exception e)
            {
            }
            return false;
        }
    }
}
