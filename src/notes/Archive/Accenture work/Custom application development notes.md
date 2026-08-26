### UI policies vs Data Policies
> [UI Policies](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/form-administration/task/t_CreateAUIPolicy.html) are useful for conditional _suggestions_ like showing and hiding fields or adding field messages based on another field’s value, while [Data Policies](https://docs.servicenow.com/bundle/paris-platform-administration/page/administer/field-administration/concept/c_DataPolicy.html) and Business Rules are better suited for doing conditional _enforcement_ like making a field mandatory.


![[Pasted image 20240125152146.png]]
# User story 4
Solutions:
- Create 4 client scripts to trigger for each checkbox
- Use `g_form.onUserChangeValue` to add an event listener to the whole form