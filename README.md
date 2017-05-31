Call Your Mom
==========
By Daniel Doherty.

This is an attempt at a humorous app for when you call your mom and can't think of what to talk about. The app
attempts to give you topics for conversation. It also gives you soothing affirmations and beach noises for
if you get stressed out by the call. There is also an area that plays a common sound that would enable you to 
leave the call if neeeded. You can also change the theme of the site for various types of mothers. Lastly there is
an apology generator for when that might be needed.


User Stories
============
I can't figure out what to say next to my mom.
  *User will navigate to topics and find something suitable.*

I'm keep swearing by accident and need to apologize.
  *Not a problem the user can generate an apology on any section of the app.*

My mom stresses me out I need someone to tell me that I'm actually good.
  *User would navigate to the help section and may like what they find.*

I need to bail on this call so I can get a beer with the boys.
  *User can navigate to the abort feature and use a loud noise to end the call. User can proceed to crack a cold one
   with the boys.*

User Flow
==========
                                      
                        Topics ----> Wait for topics
                                                      
                      /
                      \ 
                        Help ----> Play sound / view help
                      /
              
 Welcome(change themes/learn about site)
            
                      \ Abort ----> Play noise
                      / 
                      \
                        Apology(persistent) ----> generate apology

Technologies Used
=================
HTML5/CSS/JS 
React JS  
React-Router version 3 - This was needed to route a single page application dynamically.
React-Sound
Firebase - for storing topics, affirmations, and apologies
Git - Used for version control.
Bootstrap CSS - Used for resposivity.