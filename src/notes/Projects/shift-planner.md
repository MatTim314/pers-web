#shift-planner #rust #project
[[shift-planner-board]] - Board link

# Thoughts
- Maybe using full stack framework wouldn't be that bad here but I think using something more raw could present more general learning opportunities for us. I was thinking [Leptos](https://www.youtube.com/watch?v=vAjle3c9Xqc&ab_channel=CodetotheMoon), currently unsure how viable is Leptos when we want to use [[Progressive Web Applications]] 

# Description
Shift planner is an app and a website where managers of small business, who primarily employ part-time shift workers can manage who has which shifts.
It has 2 components:
- Admin web page for managers
- Phone application for workers themselves
## Manager page
Managers have a easily accessible web page where they can:
- Log in
- Create new shifts or automatically generate shifts for the week based on parameters like: *shifts per day*, *opening-hours*, *weekdays-open*
- See currently available people, see who has how many shifts
- Assign and reassign shifts between people
- Send a notification with custom message to everyone
## Shift worker app
Shift workers will have a dedicated application, which they can install as a [pwa](https://web.dev/learn/pwa/)