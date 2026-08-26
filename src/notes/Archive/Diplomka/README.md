#diplomka 
>Server which collects the data from ActivityWatch users runs on [StratusFI](stratus.fi.muni.cz) under ID *9209*

## How to connect
Connection to the server is only available using **SSH** from inside of **FI MUNI network**.
- To connect to the server run:
	`aw-server-admin@irtis-aw.fi.muni.cz`
- For password, contact *Jarda Plhák* (xplhak@gmail.com) or Matej Timar (matej.timar@gmail.com)

## Environment

You will be logged in as `aw-server-admin` user with `sudo` privileges.
You should have access to these folders:
- `/root/aw-serverside-code` - contains all file related to building and configuring the server
- `/var/database_backups` - contains backups of database annotated with time of creation 

### Available commands
There are 4 commands created to ease server administration:
- `create-backup` - creates database backup inside `/var/database_backups`
- `restart-server`- shuts down all containers and starts them back up
- `rebuild-server` - shuts down all container, updates build files and rebuilds them
- `check-running-containers.sh` - a script to check if any of the expected containers is not running, used by the **cronjob**
### Stack
Server is using docker with configuration specified inside `docker-compose.yaml`
Correctly running server should return these container names when `docker ps` is called:
- **aw-serverside-code-db-1**
- aw-serverside-code-nginx-exporter-1
- aw-serverside-code-postgres-exporter-1
- **aw-serverside-code-web-1**
- grafana
- **nginx**
- prometheus  
>[!WARNING]
> Containers denoted in **bold** are ***critical*** for server functionality. A **cronjob** is setup to check every 5 minutes if any of these containers has stopped running and if so, it calls `restart-server` command.

## API
Documentation is available at:
	irtis-aw.fi.muni.cz/redoc
>[!TIP]
>If the documentation link is broken, the server is most likely down as well :)
