# Potential list of features to implement. 
## Requirements for the user:
1. User signs-up/ log-in as a person
2. User deposits money with Momo
3. User can use Carbon calculator w/ different inputs to know how much carbon is needed 
4. User can see set of existing packages of carbon (compliance market)
5. User can sell their own carbon credit through trade
6. User can buy other's carbon credit through trade
7. All user transactions should be detailed in a history page


## Details for each implementation
1. **User signs-up/ logs-in as a person (free/ public)**
  
Input for sign up: Choose as person / company -> email -> organization/ user name -> password  
Input for sign in: email -> password  

Input for sign-up is taken, encrypted and sent to the backend, and stored in a mongo / postgresql db. If valid, send validity back to user, and give user log-in cookie.

Input for sign-in is simply checks if email/ password combination exists by encrpyting the password and sending it to the backend server. If it does, give user the log-in cookie

All log-in cookies sent to the user will (for now) be valid, as long as it exists. 

2. **User deposits money w/ Momo**
  
Docs to refer to: https://developers.momo.vn/v1/#cong-thanh-toan-momo-gioi-thieu   
Sample code: https://github.com/momo-wallet/payment/blob/master/nodejs/MoMo.js   

Basic idea: send json in the following format (user -> our business account)   
{  
  "accessKey": "F8BBA842ECF85", // from MOMO account  
  "partnerCode": "MOMO", //  from momo account  
  "requestType": "captureMoMoWallet", // keep the same  
  "notifyUrl": "https://momo.vn", // result URL  
  "returnUrl": "https://momo.vn", // re-direct URL after results  
  "orderId": "MM1540456472575", // unique ID for the order (time generated)  
  "amount": "150000", // any number between 1k -> 20tr  
  "orderInfo": "SDK team.", // info that will be passed back to the result URL  
  "requestId": "MM1540456472575", // unique ID for the request (can be same as orderID)  
  "extraData": "email=abc@gmail.com", // not needed   
  "signature": "996ed81d68a1b05c99516835e404b2d0146d9b12fbcecbf80c7e51df51cac85e"
  // add everything and encrypt with SHA256  
}  
  
We may also want to check the status of the URL sometime in the future. 

3. **Carbon calculator**

The basic design is:  
Create items (clothes - kg, washing powder - kg, meat - kg, beer - kg, wine - kg, electricity - watts, gas - V?, ceramics - kg, wood - kg, steel - kg, aircraft - distance, trains - distance, motorcycle - distance)   

Each item will also have a "conversion value" (example: 3kg of clothes -> 3.0.3 kg of CO2, or 1000 km of aircraft -> 1000.0.5 kg of CO2).   

All items will be displayed, with an input next to them (default as 0)  
Then, the user can fill out the input to indicate how much clothes / meat / ... is used in 1 year.  

And finally, there is an add total button and a result displayer, which is (sum(measured value * conversion value)).  


4. **Compliance market / packets of carbon**
   
Here, we create the packet w/ price, carbon credit gained, number of packets to buy (default as 1), and button to buy.  

The button redirects the user to a Momo transaction. Once the payment is done, the returnURL should be a waiting page to verify the transaction (from the notiyURL), which will redirect the user to a success page if it successful, or a failure page if it is not. The successful page should have a link to the history page.   

5. **Sell their own carbon credit**

Here, the user will create a similar packet with price, carbon credit gained, and buy button. After the necessary info is retreived (and the amount of carbon credit in the account is verified), we display it in the free-market page.

There will also be an edit page, that can be accessed by clicking on the history of user transactions
  
6. **Buy other's carbon credit**  

There is a list of carbon sell-deals, and when the user buys (after verfication), we send the user to the Momo api to pay us. After our money is recieved, we pay the seller (somehow?), and the carbon credit is updated in both the buyer and the seller's profile  


7. **User transactions**

This will be updated after 4, 5, 6. 
We will display: type of action (bought/ sold/ pending sell), money payed/ recieved/ waiting for, carbon credit received/ payed/ waiting for, and edit (for sell deals that aren't done)

The total remaining carbon credit is detailed at the end. 

8. **Applying carbon credit**

Currently unsure how carbon credit is used, besides from selling. 
