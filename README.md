# Node-JS-and-MySQL

To learn Node js and MySQL , I follow this playlist:<br>
YouTube Link:https://www.youtube.com/playlist?list=PLQDioScEMUhnS7kmbDqMD219_MgAHhxgf<br>
Here I will upload those code, which I practiced during learning from this playlist

Before Run this code you have to follow this code in VSCode:
npm install express
# Command
    npm install express nodemon mysql ejs

# Modify Column Name Size or Change Datatype
    alter table student
    modify Email varchar(100)
# Change primary key Column
    -- Drop the existing primary key constraint on the email column
    ALTER TABLE students DROP PRIMARY KEY;

    -- Add a new primary key constraint on the roll column
    ALTER TABLE students ADD PRIMARY KEY (roll);
# Row Number in a Table
    SELECT COUNT(*) AS total_rows FROM table_name;
# Change Row value
    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
# Change Column Name
    ALTER TABLE students
    CHANGE old_column_name new_column_name data_type;
# Delete Row
    DELETE FROM students
    WHERE student_id = 101;
#  Foreign Key
    CREATE TABLE child_table (
    child_id INT PRIMARY KEY,
    child_column datatype,
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES parent_table(parent_id)
    );
# Delete Column
    Alter table School drop column students
# Change Table Name
    RENAME TABLE old_table TO new_table;

