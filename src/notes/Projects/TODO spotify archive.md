## Storm
- Maybe I don't even need a backend for this. I might have a cron running on my pc and whenever it's turned on, it checks whether the update is necessary. If so it will make a request to the Spotfiy API, gets the songs from this week and pushes them to git or somewhere idk. Then the frontend will be just a static site which dynamically updates on load the list of songs based on the github file. That's it. 
- Maybe the frontend could get the list of songs and then use Spotify API to get more info about the songs, like pictures or links to the songs idk.
- The raw list from github or the cool looking list on the site should be made a choice for the user.
- Not sure how to make this work for multiple users.

- [ ] Store user info in a store
- [ ] Initialize a databaze, Cockroach DB or Supabase (as used in [Building complete SaaS](https://www.youtube.com/watch?v=A3l6YYkXzzg&t=1899s&pp=ygUEc2Fhcw%3D%3D))