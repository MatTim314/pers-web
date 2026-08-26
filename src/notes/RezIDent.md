 #colabs #project #programming #rezident 
  
  > CRUD on residencies

\+

> Reservation system for CoLabs centre primarily for renting out their event halls. 


# Reservation system
Currently the CoLabs team uses large excel spredsheet to write down who has reserved what and when. Detailed applications for reservations are provided to the team using Google Forms. Currently the system requirements should stem from these stories:
- I want to reserve a large hall for a concert. I go to CoLabs website where I find the option to reserve their facilities. I either enter an exact date or I browse the calendar to see for which dates is the large hall still available. I find a suitable date and proceed with reservation. I fill an exact form with details required to reserve large hall. I go to a section with my reservations where I see my application and it's current status. I can edit details of the application. I'm notified by email about starting an application process and I'm further notified about any updates to my application status. 

# Residencies
So far I'm convinced that the system for residencies should be an extension built from the reservation system.
Basically i see the connection as *different data, same system*. **WHAT** is reserved changes but when and how basically remains the same. There is still a form which should be filled out, there is still the review of the application which has to happen and so on. The only thinkable difference is the data model and even that is a large *MAYBE*. Since the difference might just be a different value for a flag in database record. One **IMPORTANT** difference might be that the residencies could in future need the ability to hold many different cultural institutions. Meaning the 
  
