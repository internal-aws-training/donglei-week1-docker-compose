using Microsoft.AspNetCore.Builder;
using TodoApi.Data;
using TodoApi.Models;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ApplicationBuilderExtensions
    {
        public static void EnsureDatabase(this IApplicationBuilder app)
        {
            // serviceProvider is app.ApplicationServices from Configure(IApplicationBuilder app) method
            using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<TodoContext>();

                DbInitializer.Initialize(context);
            }
        }
    }
}
