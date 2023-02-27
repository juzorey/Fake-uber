# project2

##sword fighting game
special movies from api of anime or art
canvas js
catboy- https://catboys.com/api


##music ring throw balls around and when it hits the walls it makes the sound
the music api
AI Mastering - https://aimastering.com/api_docs/
Freesound- https://freesound.org/docs/api/
canvas js



##ride share blockchain with dfs and bfs for the best way to get somwhere and visualizer
peer to peer rideshare blockchain
chainlink - https://chain.link/developer-resources
nownodes- https://nownodes.io/

##Transfering to driver and rider
-the information that is needed is
-the driver and the riders location at all times from 
-the history of the driver and the rider including feedback time 

the wallet interacts with the contracts
connect contract the the frontend

##rider
-sees ongoing rides
-chooses start and end location
-can see the price and time of the driver
-can request from the list of drivers to be part of the ride

##driver
- they get added to the list of drivers active
-shows where their start location and end location is
-shows where they are currently when starting the drive
- display how many seats they have open in the the object
- shows the amount per seat in the object

what should the contract do and what should javascript or other api do
where should the location go instead

use useEffect and useState and useContext
making tabs with active and calenders
how is useState being usedi multi comp i thought it was only for the app is it transferable?
what is this.state how to add to state and to context
using two states in same comp
review through all the labs last week
using usenavigate to go to diff comp


##Do Today 2/27/2023
- Finish pseudo code for the logic
- Finsih riders and drivers wireframe- needs list of trips
- know how will the contract be interacting with the way money is transfered 
- know how the smart contract will be stored and tracked
- Make React shell for the riders 

##Steps

who is the driver and who is the rider? who is the owner of the contract
do they each have own contract and the money gets transfered to contract 
- Make smart contract
- Have Riders info
- Have Drivers info
- add new driver
- add new rider


when riding
- know when the rider is active(available to ride, not on a trip) -- this will the variable that depends if they can check out a ride
- know when the driver is active(available to drive, not on a trip)
- the rider and the driver will have their balance display 
- the rider can see the list of trips available with the info{name,start and end, time, seats available, price per seat,}
- when the rider clicks on the trip, they get to see the information underneath and the map shows the start and end location
- the rider can choose their pickup location and the and drop location
- the added route will show on the map and calculate the best route to take with them
- if the balance of the rider is less than the payment then they cant checkout ride
- if the rider balance is greater than the seats payment then allow them to checkout that ride
- if the rider can checkout then add the rider to the list of riders in the trip 
- the driver gets to see the added rider to the trip along with their seat amount and new route combined and get to choose to accept them to the ride or not
- when the driver accepts the riders request the the rider gets added through their wallet address to the contract
- i think the owner of the contract will be the one who deploys it which  the run deploying it would be the driver
- 
- record the start of a trip for rider and driver
- at start of the trip the rider will send money to the contract when ride is completet the money will be sent to the driver
- or the money is sent when the driver brings the rider to the location or when the ride is ending
- record the end of the trip for rider and driver
- when ride check out starts the time starts and the active is changed to true and they cant checkout another ride

- 

