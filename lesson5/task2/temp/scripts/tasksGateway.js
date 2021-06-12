"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasksList = exports.deleteTask = exports.updateTask = exports.createTask = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};

exports.createTask = createTask;

var updateTask = function updateTask(taskId, taskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};

exports.updateTask = updateTask;

var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};

exports.deleteTask = deleteTask;

var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (resoponse) {
    return resoponse.json();
  });
};

exports.getTasksList = getTasksList;