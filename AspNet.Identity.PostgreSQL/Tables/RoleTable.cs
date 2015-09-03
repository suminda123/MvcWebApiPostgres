﻿using System;
using System.Collections.Generic;

namespace AspNet.Identity.PostgreSQL
{
    /// <summary>
    /// Class that represents the AspNetRoles table in the PostgreSQL Database.
    /// </summary>
    public class RoleTable
    {
        private PostgreSQLDatabase _database;

        internal const string tableName = "AspNetRoles";
        internal const string fieldId   = "Id";
        internal const string fieldName = "Name";
        internal static string fullTableName = Consts.Schema.Quoted() + "." + tableName.Quoted();

        /// <summary>
        /// Constructor that takes a PostgreSQLDatabase instance.
        /// </summary>
        /// <param name="database"></param>
        public RoleTable(PostgreSQLDatabase database)
        {
            _database = database;
        }

        /// <summary>
        /// Deletes a role record from the AspNetRoles table.
        /// </summary>
        /// <param name="roleId">The role Id</param>
        /// <returns></returns>
        public int Delete(string roleId)
        {
            string commandText = "DELETE FROM "+fullTableName+" WHERE "+fieldId.Quoted()+" = @id";
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", roleId);

            return _database.Execute(commandText, parameters);
        }

        /// <summary>
        /// Inserts a new Role record in the AspNetRoles table.
        /// </summary>
        /// <param name="roleName">The role's name.</param>
        /// <returns></returns>
        public int Insert(IdentityRole role)
        {
            string commandText = "INSERT INTO "+fullTableName+" ("+fieldId.Quoted()+", "+fieldName.Quoted()+") VALUES (@id, @name)";
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@name", role.Name);
            parameters.Add("@id", role.Id);

            return _database.Execute(commandText, parameters);
        }

        /// <summary>
        /// Returns a role name given the roleId.
        /// </summary>
        /// <param name="roleId">The role Id.</param>
        /// <returns>Role name.</returns>
        public string GetRoleName(string roleId)
        {
            string commandText = "SELECT "+fieldName.Quoted()+" FROM "+fullTableName+" WHERE "+fieldId.Quoted()+" = @id";
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", roleId);

            return _database.GetStrValue(commandText, parameters);
        }

        /// <summary>
        /// Returns the role Id given a role name.
        /// </summary>
        /// <param name="roleName">Role's name.</param>
        /// <returns>Role's Id.</returns>
        public string GetRoleId(string roleName)
        {
            string roleId = null;
            string commandText = "SELECT "+fieldId.Quoted()+" FROM "+fullTableName+" WHERE "+fieldName.Quoted()+" = @name";
            Dictionary<string, object> parameters = new Dictionary<string, object>() { { "@name", roleName } };

            var result = _database.QueryValue(commandText, parameters);
            if (result != null)
            {
                return Convert.ToString(result);
            }

            return roleId;
        }

        /// <summary>
        /// Gets the IdentityRole given the role Id.
        /// </summary>
        /// <param name="roleId"></param>
        /// <returns></returns>
        public IdentityRole GetRoleById(string roleId)
        {
            var roleName = GetRoleName(roleId);
            IdentityRole role = null;

            if (roleName != null)
            {
                role = new IdentityRole(roleName, roleId);
            }

            return role;

        }

        /// <summary>
        /// Gets the IdentityRole given the role name.
        /// </summary>
        /// <param name="roleName"></param>
        /// <returns></returns>
        public IdentityRole GetRoleByName(string roleName)
        {
            var roleId = GetRoleId(roleName);
            IdentityRole role = null;

            if (roleId != null)
            {
                role = new IdentityRole(roleName, roleId);
            }

            return role;
        }

        public int Update(IdentityRole role)
        {
            string commandText = "UPDATE "+fullTableName+" SET "+fieldName.Quoted()+" = @name WHERE "+fieldId.Quoted()+" = @id";
            Dictionary<string, object> parameters = new Dictionary<string, object>();
            parameters.Add("@id", role.Id);

            return _database.Execute(commandText, parameters);
        }
    }
}
