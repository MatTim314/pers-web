2025-12-07
- create a dev env build script which will do the following:
	- connect to the server
	- take current snapshot of the database given as argument (Catalog, Orders, ...)
	- download this snapshot to local
	- uses docker to spin up local mysql instance in a container
	- database snapshot is provided to the local mysql instance after it starts
	- checks for existence of .properties file in the project and checks if the file contains correct database url connection string according to the newly generated local database
	- 
2025-12-07


- [ ] Create a separate environment for development
	- [ ] Create a docker-compose file for deploying all services
		- [ ] Created all_databases_snapshot.sql 
	- [ ] Create a .env file and modify the configurations on every service to use data from the .env file
		- [ ] Find out what information should be in the .env file



## Questions
- **Where to store profile specific variables?**
	- .env
	- application-dev.properties
- **How is the code going to be versioned?**
	- Permanent branch called *dev* for every service
- **How is the development environment going to be deployed?**
	1. create a folder
	2. git clone all repositories (maybe a new repo with submodules could be the way)
	3. copy a dump of the database from the MM main server
	4.  = docker-compose up
- List of things we need to isolate or create a separate version of:
	- Database