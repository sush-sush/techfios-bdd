$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want a login page so that only authentic",
  "description": "   users will be able to login",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#     Scenario: Valid users should be able to login"
    },
    {
      "line": 5,
      "value": "#     Given a valid user"
    },
    {
      "line": 6,
      "value": "#     When user goes to Techfios Site"
    },
    {
      "line": 7,
      "value": "#     Then Login Page should be displayed"
    },
    {
      "line": 8,
      "value": "#     When user logs in with valid credentials"
    },
    {
      "line": 9,
      "value": "#     Then Dashboard page should display"
    }
  ],
  "line": 11,
  "name": "Valid users should be able to login using embedded parameters",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login-using-embedded-parameters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user goes to Techfios Site",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Login Page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user logs in with valid   \"\u003cusername\u003e\" and   \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login-using-embedded-parameters;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login-using-embedded-parameters;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123"
      ],
      "line": 20,
      "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login-using-embedded-parameters;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Valid users should be able to login using embedded parameters",
  "description": "",
  "id": "as-a-user-i-want-a-login-page-so-that-only-authentic;valid-users-should-be-able-to-login-using-embedded-parameters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user goes to Techfios Site",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Login Page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user logs in with valid   \"techfiosdemo@gmail.com\" and   \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Dashboard page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.a_valid_user()"
});
formatter.result({
  "duration": 470902500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_goes_to_Techfios_Site()"
});
formatter.result({
  "duration": 70200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_Page_should_be_displayed()"
});
formatter.result({
  "duration": 61300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 27
    },
    {
      "val": "abc123",
      "offset": 58
    }
  ],
  "location": "LoginSteps.user_logs_in_with_valid_and(String,String)"
});
formatter.result({
  "duration": 9345600,
  "error_message": "java.lang.NullPointerException\r\n\tat steps.LoginSteps.user_logs_in_with_valid_and(LoginSteps.java:57)\r\n\tat ✽.When user logs in with valid   \"techfiosdemo@gmail.com\" and   \"abc123\"(./src/test/java/features/login.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.dashboard_page_should_display()"
});
formatter.result({
  "status": "skipped"
});
});