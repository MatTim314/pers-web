- Kam mám dopiče dať PickerLogin ? Zatiaľ mi napadlo dať ako alternatívu pre Login a držať túto funkcionalitu mimo autorizovanej zóny. 
	- Zatiaľ jebať, idem spraviť Kubovu admin stránku pre Pickerov


Ak chce Kubo pridavat Pickerov tak to nemoze byt cez Auth0 pretoze to Kubo nespravuje.



- [x] Fire up frontend
- [ ] Create dialog for selecting most common quantity




# Admin page
- Use Table
- On load, information to the table is loaded
	- Data is modeled in [[Data models for admin page]]
	
- To add new row, form is used to enter the information
- Rows contain edit and delete buttons
- When edit button is clicked:
	- Row information show up in a form dialog
	- Submitting the form sends the new info to BE and refreshes the table
- When delete button is clicked:
	- Delete request is sent to BE and table is refreshed




















