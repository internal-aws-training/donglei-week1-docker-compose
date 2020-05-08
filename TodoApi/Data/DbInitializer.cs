using TodoApi.Models;
using System.Linq;
using System.Collections.Generic;

namespace TodoApi.Data
{
    public static class DbInitializer
    {
        public static void Initialize(TodoContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.TodoItems.Any())
            {
                return;   // DB has been seeded
            }

            var items = new List<TodoItem>()
            {
                new TodoItem{
                    Name = "01 Set up backend API",
                    IsComplete = true,
                },
                new TodoItem{
                    Name = "02 Setup front-end App",
                    IsComplete = true,
                },
                new TodoItem{
                    Name = "03 Dockerize all the apps",
                    IsComplete = false,
                }
            };

            context.TodoItems.AddRange(items);

            context.SaveChanges();
        }
    }
}