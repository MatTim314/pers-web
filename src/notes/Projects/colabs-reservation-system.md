# Reservation system for CoLabs
Colabs studio recently expanded their facilities to include large halls.
They wish to rent them out and it would be beneficial is a system for reservation was in place,
a Colabs employee would have to manually create the schedule for all reservations, pen and paper style.

## Considerations
- Implementation should be straight forward since we are implementing basically an Excel table with highlighting and rules enforcement.
- Any framework considerations should be avoided to keep the project lightweight, Colabs is not an institution willing to spend money on infrastructure costs. 
	- Possible tech-stack choices include HTMX, Supabase, 

# Design document
> This part details functionality expected from resulting product.

`?` symbol is used to denote optional functionality 

## Requirements
### Must have:
- CRUD on reservations

### Should have
- Admin access to change any aspect of all reservations 
- ?Ability to log in and see all your reservations  
- Acquire new reservations
- Notification system for notifying dedicated entities through E-mail or app notifications.
- See current reservations anonymously 
