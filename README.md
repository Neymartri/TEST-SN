## R1 Description of your website, including:
****Purpose****

The main idea for "Squid Note" is to be able to make planning an event alot eaiser for people with no time and in a buget. 

there will be a keyword bar where you can type in what sort of event they are after. 

****Functionality / Features****

once a user logged in , the user will be able to create their own customised event planning board, first can seach for the event.

***Target Audience***

Our target audience are mainly for people who are new to planning events.

​	- Familys 

​	- Anyone on a buget 

​	- Group of friends 

​	- People with no idea where to start when it comes to planning an event .

This app will be good for people with no time to look around for everthing they will to plan an event . the app will be able to help them list out the items they need and places idea for their desire event. 

****Tech Stack**** 

The backend of the "Squid note" we will be using Ruby on Rails , set up in API mode . This will be integrated with Postgresql database and hosted on Heroku. Two Ruby gems will be incorporated to permit secure user logon knock (to generate the JavaScript web token for user authentication), and bcryot (to provide the password hashing algorithm).

The app will be completley free of charge, but in the future we might implement the payment gems (Stripe) for users to be able to make direct payment with us. 

The Front-end will utilise React.js, and be hosted on Netifly. It will communicate with the Rails API using HTTP client. the useState, useEffect, and useContext hooks will be utilized where applicable.

Testing will be performed using cypress.js.


## R2 Dataflow Diagram
![data flow1](https://i.imgur.com/l73NLz1.jpg)

Entity Relationship Diagram
![ERD](https://i.imgur.com/c7EBByU.png)


## R3 Application Architecture Diagram
![Architecture Diagram](https://cdn.discordapp.com/attachments/912503877725741107/915506465492590652/Application_architecture_diagram_1.png)



## R4 User Stories

User Expectations:

All users will expect the following features or functionality:

- It makes it impossible for users to use it unless they log in so that they can record their own events.

- The layout is designed so that you can recognize the events created by the user at a glance.

- Through search and filter, user can get suggestions for the items you want to find.

- It displays all the information you need to know through a dashboard familiar to the user.

- It makes it possible to quickly and easily create, view, update, and delete all event items.

- The number and cost of items in all products can be recorded and they are calculated.


User Characterisitics

Three distinct target user types were considered:

- Mark is going to choose his mother's birthday present. He was suggested a gift for his mother after choosing the age group and gender through the squid note. And he will make a list and think about what would be suitable.

- Here is a man named John who wants to marry his beloved girlfriend two months later. He wants to record simple plans and costs. In this case, he can search all the items and costs you need through squid note

- Chloe is an event planner. She needs an app that can manage various events. In this case, she can manage the lists you have recorded for each title along with the total cost.


## R5 WireFrames

- Pop Up
![Pop up](https://i.imgur.com/r0v3aGo.png)

- Sign Up
![Sing up](https://i.imgur.com/1WMAAYy.png)

- Home(Event Preview)
![Home](https://i.imgur.com/54VlvJV.png)

- Search 
![Search](https://i.imgur.com/h2nPULo.png)

- Filter
![Filter](https://i.imgur.com/nT8qza3.png)

- Edit
![Edit](https://i.imgur.com/wBq3XFW.png)

- View Detail
![View Detail](https://i.imgur.com/zFq25GE.png)




## R6 Screenshots of your Trello board throughout the duration of the project
Day 1.
![screen shot 1](https://i.imgur.com/qSD4LY5.png)
Day 2.
![Screen shot 2](https://i.imgur.com/wVKL0uB.png)
Day 3.
![Screen shot 3](https://i.imgur.com/Ojk2VHt.png)
