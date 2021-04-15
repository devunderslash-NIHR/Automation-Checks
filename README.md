GH pages Reporting page that updates per commit to main branch. 

This will provide a bear bones configuration for test automation of your front end functionality for multiple sites if required. The configuration includes a workflow config (cypress-report.yaml) run the tests and then collate a report and host it on your GH-Pages.

Please ensure that if you require username and passwords to be passed in to the run that you add them to GitHub Secrets and then subsequently to the cypress-report.yaml.

For local testing you will need to add your username and password to cypress.json:

```{
"defaultCommandTimeout": 6000,
*** ADD THIS BLOCK and UPDATE VALUES***
"env": {
    "username": "add user",
    "password": "add password"
},
***************************************
"reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "configFile": "reporter-config.json"
    },
    "experimentalStudio": true
}
```
