using Microsoft.AspNetCore.SpaServices.AngularCli;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "VueApp/dist";
});

// Add services to the container.

builder.Services.AddControllersWithViews();

// Add authentication
builder.Services.AddAuthentication("CookieAuth")
    .AddCookie("CookieAuth", options =>
    {
        options.Cookie.Name = "AuthCookie";
        options.LoginPath = "/Login"; // Redirect here if not authenticated
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "VueApp";
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
