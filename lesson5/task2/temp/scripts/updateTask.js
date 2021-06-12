"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onToggleTask = void 0;

require("core-js/modules/es.array.find.js");

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

var onToggleTask = function onToggleTask(e) {
  var tasksList = (0, _storage.getItem)('tasksList');
  var taskId = e.target.closest('.list-item').dataset.id;

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var done = e.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  (0, _tasksGateway.updateTask)(taskId, updatedTask).then(_tasksGateway.getTasksList).then(function (newTasksList) {
    (0, _storage.setItem)('tasksList', newTasksList);
    (0, _renderer.renderTasks)();
  });
};

exports.onToggleTask = onToggleTask;