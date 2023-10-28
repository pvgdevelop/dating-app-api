using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
  public class AppUser
  {
    public int Id { get; set; }

    [Required]
    public string UserName { get; set; }
    public byte[] PasswordHash { get; set; }
    public byte[] PasswordSalt { get; set; }
  }
}
// STOP SERVER
// https://learn.microsoft.com/en-us/ef/core/get-started/overview/first-app?tabs=netcore-cli
// dotnet add package Microsoft.EntityFrameworkCore.Sqlite (first time)
// dotnet ef migrations add MigrationName
// dotnet ef database update