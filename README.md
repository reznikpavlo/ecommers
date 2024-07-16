# ecommers
E-commers for teamup program (ComIt) 

## DB Initialization

1. Install PostgreSQL on your machine.

2.  Log in to PostgreSQL as a superuser: 

``psql -U postgres``

3. Create the database:

``CREATE DATABASE amazon;``

4. Create the user: 

``CREATE USER amazon_user WITH PASSWORD 'amazon_password';``

5. Grant privileges to the user on the database:

``GRANT ALL PRIVILEGES ON DATABASE amazon TO amazon_user;``

6. Connect to the new database:

``\c amazon``

7. Grant schema usage and creation privileges to the user:

````
GRANT USAGE ON SCHEMA public TO amazon_user;
GRANT CREATE ON SCHEMA public TO amazon_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO amazon_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO amazon_user;
````

8. Exit the psql prompt:

``\q``

9. Initialize the database (you must be in the project root directory to run the following command):

`` psql -h localhost -U amazon_user -d amazon -f ./api/data/init_db.sql``