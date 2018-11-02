
(function () {
    'use strict';

    angular.module('demoApp').controller('MainController', MainController);
    function MainController(TodoListService) {

        var vm = this;
        vm.newTodoInput = '';
        vm.todos = [];

        /**
         * Check if keypress is enter
         *
         * @param {Integer} keyEvent
         * @returns {Void}
         */
        vm.inputKeypress = function (keyEvent) {
            if (keyEvent.which === 13) {
                vm.addEntry();
            }
        };

        /**
         * Add todo list entry
         *
         * @see vm.newTodoInput
         * @returns {Void}
         */
        vm.addEntry = function () {
            if (vm.newTodoInput.trim() === '') {
                return;
            }
            TodoListService.add(vm.newTodoInput);
            vm.newTodoInput = '';
            vm.todos = TodoListService.getAll();
        };

        /**
         * Remove entry by index
         *
         * @param {Integer} index
         * @returns {Void}
         */
        vm.removeEntry = function (index) {
            TodoListService.remove(index);
            vm.todos = TodoListService.getAll();
        };

    }

})();