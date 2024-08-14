@lib-02
Feature: Logout from the application

    As a user, I should be able to logout from the app.

    #* AC1: user should log out from the homepage by clicking the “Log out”  button under the account name.


    # TODO: verify users can logout from the app
    Background:
        Given user is already on the login page

    Scenario Outline: User log out from the application
        Given user is already logged in as '<user-type>'
        When user clicks the user profile on the top right corner of the page
        And user clicks the “Log out” button under the account name
        Then user should be logged out from the application
        Examples:
            | user-type |
            | admin     |
            | student   |


#? Should there be more scenarios for this user story? Feel free to add more scenarios.