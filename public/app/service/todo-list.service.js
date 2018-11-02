
(function () {
    'use strict';

    angular.module('demoApp').factory('TodoListService', TodoListService);
    function TodoListService() {

        var data = [];

        var service = {
            getAll: getAll,
            add: add,
            remove: remove,
        };

        return service;

        /**
         * Get all todos
         *
         * @returns {Array}
         */
        function getAll() {
            return data;
        }

        /**
         * Add entry to the todo list
         *
         * @param {String} text
         * @returns {Boolean}
         */
        function add(text) {
            if (data.indexOf(text) !== -1) {
                return false;
            }
            data.push(text);
            return true;
        }

        /**
         * Remove entry by index
         *
         * @param {Integer} index
         * @returns {Boolean}
         */
        function remove(index) {
            if (typeof data[index] === 'undefined') {
                return false;
            }
            data.splice(index, 1);
            return true;
        }

    }

})();


