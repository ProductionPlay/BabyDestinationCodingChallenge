import HttpStatus from 'http-status-codes';

const controller = {};

controller.welcomeUser = async (req, res)  => {
  return res.status(HttpStatus.OK)
    .json({
    'data': {
      'message': 'Welcome to Baby Destination'
    }
  });
}


module.exports = controller;