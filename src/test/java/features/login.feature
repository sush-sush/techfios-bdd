Feature: As a user I want a login page so that only authentic 
     users will be able to login
        
#     Scenario: Valid users should be able to login 
#     Given a valid user 
#     When user goes to Techfios Site 
#     Then Login Page should be displayed 
#     When user logs in with valid credentials 
#     Then Dashboard page should display
         
Scenario Outline: Valid users should be able to login using embedded parameters
         Given a valid user 
         When user goes to Techfios Site 
          Then Login Page should be displayed 
         When user logs in with valid   "<username>" and   "<password>"
         Then Dashboard page should display
         
         Examples:
                |username	                       |password|
                |techfiosdemo@gmail.com|abc123    |