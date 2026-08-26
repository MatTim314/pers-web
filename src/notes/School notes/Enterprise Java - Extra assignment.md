#enterprise-java 
# JENAv2 analysis - first tool
It seems the number of issues went down as the project progressed. :) 
## MS1
```DI1 Unused Injection                           0 
DI2 Direct Container Call                      7 
DI3 Concrete Class Injection                   10
DI4 Open Window Injection                      0 
DI5 Framework Coupling                         40
DI6 Multiple Forms Of Injection                0 
DI7 Open Door Injection                        0 
DI8 God Di Class                               0 
DI9 Multiple Assigned Injection                0 
DI10 Long Producer Method                      0 
MOC1 Final Method Call With Exception          0 
MOC2 Constructor Call With Exception           0 
MOC3 Static Method Call With Exception         52
MOC4 Inappropriate Method Mocking              0 
MOC5 Inappropriate Method Call In Static Block 0 
PER1 N Plus1 Query Problem                     0 
SEC1 Storing Secrets In Insecure Places        19
SEC2 Disabling Csrf Protection                 0 
SEC3 Lifelong Access Tokens                    0 
SEC4 Insecure Default Configuration            0 
SEC5 Signing Jwt With Fixed Secret             0 
SEC6 Insecure Communication                    6 
SER1 Tiny Service                              12
SER2 Multi Service                             1 
```
## MS2
```DI1 Unused Injection                           0 
DI2 Direct Container Call                      7 
DI3 Concrete Class Injection                   7 
DI4 Open Window Injection                      0 
DI5 Framework Coupling                         37
DI6 Multiple Forms Of Injection                0 
DI7 Open Door Injection                        0 
DI8 God Di Class                               0 
DI9 Multiple Assigned Injection                0 
DI10 Long Producer Method                      0 
MOC1 Final Method Call With Exception          0 
MOC2 Constructor Call With Exception           0 
MOC3 Static Method Call With Exception         37
MOC4 Inappropriate Method Mocking              0 
MOC5 Inappropriate Method Call In Static Block 0 
PER1 N Plus1 Query Problem                     0 
SEC1 Storing Secrets In Insecure Places        19
SEC2 Disabling Csrf Protection                 0 
SEC3 Lifelong Access Tokens                    0 
SEC4 Insecure Default Configuration            0 
SEC5 Signing Jwt With Fixed Secret             0 
SEC6 Insecure Communication                    6 
SER1 Tiny Service                              12
SER2 Multi Service                             1
```
## MS3
```
DI1 Unused Injection                           0 
DI2 Direct Container Call                      4 
DI3 Concrete Class Injection                   4 
DI4 Open Window Injection                      0 
DI5 Framework Coupling                         28
DI6 Multiple Forms Of Injection                0 
DI7 Open Door Injection                        0 
DI8 God Di Class                               0 
DI9 Multiple Assigned Injection                0 
DI10 Long Producer Method                      0 
MOC1 Final Method Call With Exception          0 
MOC2 Constructor Call With Exception           0 
MOC3 Static Method Call With Exception         29
MOC4 Inappropriate Method Mocking              0 
MOC5 Inappropriate Method Call In Static Block 0 
PER1 N Plus1 Query Problem                     0 
SEC1 Storing Secrets In Insecure Places        16
SEC2 Disabling Csrf Protection                 0 
SEC3 Lifelong Access Tokens                    0 
SEC4 Insecure Default Configuration            0 
SEC5 Signing Jwt With Fixed Secret             0 
SEC6 Insecure Communication                    6 
SER1 Tiny Service                              12
SER2 Multi Service                             0
```
## MS4
```DI1 Unused Injection                           0 
DI2 Direct Container Call                      4 
DI3 Concrete Class Injection                   4 
DI4 Open Window Injection                      0 
DI5 Framework Coupling                         28
DI6 Multiple Forms Of Injection                0 
DI7 Open Door Injection                        0 
DI8 God Di Class                               0 
DI9 Multiple Assigned Injection                0 
DI10 Long Producer Method                      0 
MOC1 Final Method Call With Exception          0 
MOC2 Constructor Call With Exception           0 
MOC3 Static Method Call With Exception         29
MOC4 Inappropriate Method Mocking              0 
MOC5 Inappropriate Method Call In Static Block 0 
PER1 N Plus1 Query Problem                     0 
SEC1 Storing Secrets In Insecure Places        16
SEC2 Disabling Csrf Protection                 0 
SEC3 Lifelong Access Tokens                    0 
SEC4 Insecure Default Configuration            0 
SEC5 Signing Jwt With Fixed Secret             0 
SEC6 Insecure Communication                    6 
SER1 Tiny Service                              12
SER2 Multi Service                             0
```

# JENAv2 - second tool
## MS1 492db41b
```     
   1   │ year,project,issue_code,count
   2   │ 2024,medical,Unused attribute,9
   3   │ 2024,medical,Commented out code,13
   4   │ 2024,medical,Usage of old Java DateTime API,3
   5   │ 2024,medical,Unused import,211

```
## MS2 5a3b0c58
```
   1   │ year,project,issue_code,count
   2   │ 2024,medical,Unused import,211
   3   │ 2024,medical,Unused attribute,9
   4   │ 2024,medical,Usage of old Java DateTime API,3
   5   │ 2024,medical,Commented out code,13

```
## MS3 74a22b25
```
   1   │ year,project,issue_code,count
   2   │ 2024,medical,Unused attribute,9
   3   │ 2024,medical,Unused import,211
   4   │ 2024,medical,Commented out code,13
   5   │ 2024,medical,Usage of old Java DateTime API,3

```
## MS4 1a6cde
```
   1   │ year,project,issue_code,count
   2   │ 2024,medical,Unused attribute,9
   3   │ 2024,medical,Unused import,211
   4   │ 2024,medical,Commented out code,13
   5   │ 2024,medical,Usage of old Java DateTime API,3

```


# Notes

For unknown reasons, the second tool seems to always output the same numbers regardless of the Milestone that's currently checked out. I reviewed the code and I don't see a problem, but the chances of this happening should be minimal. To elaborate on the fact that I used the tool correctly, I'm attaching my workflow. 

# Workflow for second tool
- Download and compile Jena app used in this thesis: https://is.muni.cz/auth/th/pbgkv/?lang=en
- Use a bash script to automate running the app, since it cannot be ran on the entire repository of the app but only on the folders with services used in the app.
	```bash
	3   │ java -jar app.jar --project-root /home/mate/repos/medical-management-system/prescription-client/ --minified false --include-context f
       │ alse --output /home/mate/repos/jenav2/jena/scripts/2024-medicalPrescr
   4   │ 
   5   │ java -jar app.jar --project-root /home/mate/repos/medical-management-system/user-client/ --minified false --include-context false --o
       │ utput /home/mate/repos/jenav2/jena/scripts/2024-medicalUser
   6   │ 
   7   │ java -jar app.jar --project-root /home/mate/repos/medical-management-system/medical-record-client/ --minified false --include-context
       │  false --output /home/mate/repos/jenav2/jena/scripts/2024-medicalRecord
```
- Checkout one of the version of the repository we want to analyze, in this case `/home/mate/repos/medical-management-system`
- The output of the script are 3 files, 1 for each service. Compile these files into a single file by catting them into a single file and then modifying the file by removing the header from 2 bottom files. Done as so
	- `cat 2024-medical* >> 2024-medical`
	- Remove redundant `issues` headers from the file
	- Run `jena/scripts/aggregate_issues_into_csv.py` on the resulting file `2024-medical`
	- cat the resulting table: `cat ../table.csv`
The result always seems to be the same,

