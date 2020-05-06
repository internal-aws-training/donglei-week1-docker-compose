CREATE TABLE TodoItems (
   Id INT PRIMARY KEY,
   name VARCHAR (255),
   isComplete BOOLEAN
);

INSERT INTO TodoItems (Id, name, isComplete)
VALUES
 (1, 'item-1', TRUE),
 (2, 'item-2', FALSE);