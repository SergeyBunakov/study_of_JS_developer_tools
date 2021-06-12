"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDeleteTask = void 0;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

var onDeleteTask = function onDeleteTask(e) {
  var taskId = e.target.closest('.list-item').dataset.id;
  (0, _tasksGateway.deleteTask)(taskId).then(_tasksGateway.getTasksList).then(function (newTasksList) {
    (0, _storage.setItem)('tasksList', newTasksList);
    (0, _renderer.renderTasks)();
  });
};

exports.onDeleteTask = onDeleteTask;