var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

// Добавляем поддержку статических файлов
app.UseStaticFiles();

// Настраиваем маршрут по умолчанию на index.html
app.MapFallbackToFile("index.html");

app.MapControllers();

app.Run();
