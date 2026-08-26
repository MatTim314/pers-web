# Tasks
## Integrate new data
### Description
>There are new records for April, so integrate the new source data
> into your data warehouse
• new facts added
• updates to cars – changed on April 1, 2023
• data are available in the ZIP file (ha3-new-data.zip) in IS
• it is a dump of tables to be loaded into the staging schema in your VM
• you may copy&paste it via Query tool in pgAdmin
• the new data are in *_upd tables
• Create an incremental ETL script that loads these updates
• Mind altering tables with new attributes
• Implement it in etl-incr.sql and comment on the main steps in etl-incr.txt
• Respect SCD types - updates of dim records must be automatic, not handmade!

### Discord notes
```sql
UPDATE dim_car
  SET valid_to=curr_time,
      current_row= false
  WHERE car_key IN (SELECT upd.car_key FROM staging.car_info_upd upd);
```
Vkladanie do fact table - stačí skopírovať kód z etl a len zmeniť import tables.
## Query data about a car
### Description
Assume that your DWH also includes April records from now and on…

• For the car with the current license plate UF00LM3, calculate the
length of the car’s duty cycle on each calendar day in March and April.
• Print the columns: date (D/M/Y), license plate, company name, and length of
duty cycle in hours.
• Sort the rows by date (Y/M/D) ascendingly.
• Add a commentary about the returned rows, e.g., presence of zeroes/NULLs

>**Duty cycle = time from the first record of the day until the last record of the day**


## Query optimization
### Description
Assume the query:
```sql
SELECT license_plate, SUM(conn_count)
FROM fact_status JOIN dim_operator USING (operator_id)
JOIN dim_car USING (car_id) JOIN dim_date USING (date_id)
WHERE country='Switzerland'
GROUP BY license_plate ORDER BY license_plate
```
• Optimize this query by indexes or rewriting the query
1. First, check the query plan: EXPLAIN ANALYZE SELECT license…
		• Jot down the actual time to execute (upper bound of the interval), e.g., Sort (cost=12212.43..12220.90 rows=3388 width=76) (actual time=9.676..9.682 rows=61 loops=1)
2. Elaborate on indexes/query reformulation
	• If indexes cannot be used automatically, try the hint SET enable_seqscan = OFF;
3. Report on the results.
	• The expected speed-up is at least 10x.
	• Check the indexes used in the query plan!