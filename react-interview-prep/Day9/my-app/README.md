## Local Storage and Use Effect





## UseEffect:-
    #. it is used to run things parallely to the rendering of react application(sync tasks). 
    like it gives us footpath to run other things then the main road on which react app is rendering and running. and these process runs after react app done rendering. 
    #. jab apke state ki value change hui tb tb ye run hue. -> Mounting
    #. if we pass no dependency so it will keep running whenever state changes of anything in the whole code/component.
    #. if we pass dependency empty [] so it will run only once and not after that.
    #. if we pass dependency [num] array with value so it will change only when num value changes not depend on other things. note it will run for one time in starting but after that it will run only when value changes.
UseCase:-
    #. Pagination
    #.fetching data on page load-When a user opens a dashboard or a profile page, you usually need to grab their data immediately from an API.
    #.
    #.
    #.