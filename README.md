
# :confetti_ball::confetti_ball:Auto Completer:confetti_ball::confetti_ball:

## Create our own Auto-complete, front and back-end...just like Google...Well that was the aim at least!


#### WHO :busts_in_silhouette:
 - MynahMarie
 - NickP123
 - SamiSha

#### WHY :key:

This was a project to get our team familiar with the back and front end of development and how the two parts interact with one another. Part of this was to gain experience with creating servers and using/manipulating database information. Finally, we sought to modularise our code as much as was possible.


#### WHAT	:loudspeaker:
To access our database and return suggested results from the database (a 5000 entry list of famous people), relative to what the user had inputted. We had hoped to expand this library to something more relevant, but run out of time.

#### HOW :wrench:

The creation of a server.js file and our database in a readable txt file.

The chain of events were to take place as follows

- 1 Text entry in the search box
- 2 Event listener for text input
- 3 XHR/server Request
- 4 Database accessed and output provided
- 5 Dom Manipulation / filtering of data
- 6 Rendering of information back to user

#### Instructions for using the website:

1) Insert any text in the search box (the database is however a list of famous people)
2) As the user types they will see suggested results returned, relative to what has been typed.

#### Instructions for cloning the website:

1) Clone the repository

```
git clone https://github.com/FACN3/Auto-Completer.git
```

2) Go to the folder via the Terminal and then type:

```
npm devstart
```

Enjoy the site 😄

----------------------------------


##### SYSTEM ARCHITECTURE / PLAN

![img_6050](https://user-images.githubusercontent.com/25667270/33143605-15f8affc-cfc3-11e7-81a7-16eeed96bbb2.jpg)

###### STEP 1
- Readme creation
- Setup of project and folders
- Whiteboad steps
- outline html
- outline css


###### STEP 2
- Set up the server
- Decide on dataset being manipulated
- Outline testing structure and code using test data
- Code filter functions
- Ensure filter functions pass test

###### STEP 3
- Complete index.js (XHR requests)
- Problem solve getting data from the form, into the db and back to the user
- Problem solve getting autocomplete data to render
- update Style.css
- Final Testing
- Update README
- upload to cloud server
- Review code between team members to ensure understanding
