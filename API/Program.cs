using API.Data;
using API.Extensions;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors();

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();


// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();

app.UseCors(corsBuilder => corsBuilder.AllowAnyHeader().AllowAnyMethod()
  .WithOrigins("https://localhost:4200"));

app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}
app.MapControllers();

// Seed Data
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
  var context = services.GetRequiredService<DataContext>();
  await context.Database.MigrateAsync();
  await Seed.SeedUsers(context);
}
catch (Exception ex)
{
  var logger = services.GetService<ILogger<Program>>();
  logger.LogError(ex, "An error occurred during migration");
}


app.Run();
