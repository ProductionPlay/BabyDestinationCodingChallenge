'use strict';

var _express = require('express');

var _controller = require('./controller');

var _controller2 = _interopRequireDefault(_controller);

var _authentication = require('../../middleware/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.post('/register', _controller2.default.registerUser);
router.post('/log', _controller2.default.loginUser);
router.put('/profile', _authentication2.default, _controller2.default.editUserProfile);

module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdXNlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJwb3N0IiwiY29udHJvbGxlciIsInJlZ2lzdGVyVXNlciIsImxvZ2luVXNlciIsInB1dCIsIkF1dGhldGljYXRlIiwiZWRpdFVzZXJQcm9maWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLHNCQUFmOztBQUVBQSxPQUFPQyxJQUFQLENBQVksV0FBWixFQUF5QkMscUJBQVdDLFlBQXBDO0FBQ0FILE9BQU9DLElBQVAsQ0FBWSxNQUFaLEVBQW9CQyxxQkFBV0UsU0FBL0I7QUFDQUosT0FBT0ssR0FBUCxDQUFXLFVBQVgsRUFBdUJDLHdCQUF2QixFQUFvQ0oscUJBQVdLLGVBQS9DOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCVCxNQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbmltcG9ydCBBdXRoZXRpY2F0ZSBmcm9tICcuLi8uLi9taWRkbGV3YXJlL2F1dGhlbnRpY2F0aW9uJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvcmVnaXN0ZXInLCBjb250cm9sbGVyLnJlZ2lzdGVyVXNlcik7XG5yb3V0ZXIucG9zdCgnL2xvZycsIGNvbnRyb2xsZXIubG9naW5Vc2VyKTtcbnJvdXRlci5wdXQoJy9wcm9maWxlJywgQXV0aGV0aWNhdGUsIGNvbnRyb2xsZXIuZWRpdFVzZXJQcm9maWxlKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7Il19