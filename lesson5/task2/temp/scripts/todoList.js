"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = void 0;

var _createTask = require("./createTask.js");

var _updateTask = require("./updateTask.js");

var _deleteTask = require("./deleteTask.js");

var handleListClicks = function handleListClicks(e) {
  var isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (isCheckbox) {
    (0, _updateTask.onToggleTask)(e);
    return;
  }

  var isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (isDeleteBtn) {
    (0, _deleteTask.onDeleteTask)(e);
    return;
  }
};

var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', _createTask.onCreateTask);
  var todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', handleListClicks);
};

exports.initTodoListHandlers = initTodoListHandlers;