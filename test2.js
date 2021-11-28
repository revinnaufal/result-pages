const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'password',
      name: 'secret',
      message: 'Input your password',
    },
  ])
  .then(answers => {
    // Displaying the password for debug purposes only.
    console.info('Answer:', answers.secret);
  });

var inquirerResult = inquirer.prompt(
  [{
    type: 'password',
    name : 'secret',
    message : 'Input password'
  ]}
)