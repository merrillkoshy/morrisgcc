using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;

namespace MorrisGcc.Models
{
    public class MorrisDBContext
    {
        public string ConnectionString { get; set; }
        public MorrisDBContext(string connectionstring)
        {
            this.ConnectionString = connectionstring;
        }
        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public List<Features> GetFeatures()
        {
            List<Features> list = new();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new("select * from Features",conn);
                using var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    list.Add(new Features()
                    {
                        Id = Convert.ToInt32(reader["Id"]),
                        Title = reader["Title"].ToString(),
                        Content = reader["Content"].ToString(),
                    });

                }
            }
            return list;
        }
    }
}
