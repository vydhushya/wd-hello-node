// models/todo.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      await this.overdue();
      // FILL IN HERE
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      await this.dueToday();
      console.log("\n");

      console.log("Due Later");
      // FILL IN HERE
      await this.dueLater();
    }

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
      
      var formattedDate = (d) => {
        return d.toISOString().split("T")[0];
      };

      var dateToday = new Date();
      const yesterday = formattedDate(
        new Date(new Date().setDate(dateToday.getDate() - 1))
      );
      const todos = await Todo.findAll({
        where: { dueDate: yesterday },
      });
      const todoList = todos.map((todo) => todo.displayableString()).join("\n");
      console.log(todoList);

    };

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      var formattedDate = (d) => {
        return d.toISOString().split("T")[0];
      };

      var dateToday = new Date();
      const today = formattedDate(dateToday);
      const todos = await Todo.findAll({
        where: { dueDate: today },
      });
      const todoList = todos.map((todo) => todo.displayableString()).join("\n");
      console.log(todoList);
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      var formattedDate = (d) => {
        return d.toISOString().split("T")[0];
      };
      var dateToday = new Date();
      const tomorrow = formattedDate(
        new Date(new Date().setDate(dateToday.getDate() + 1))
      );
      const todos = await Todo.findAll({
        where: { dueDate: tomorrow },
      });
      const todoList = todos.map((todo) =>  todo.displayableString()).join("\n");
      console.log(todoList);
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
      const todo = await Todo.update(
        { completed: true },
        {
          where: {
            id: id,
          },
        }
      );
      console.log(todo.displayableString());

    }

    /*static associate(models) {
      // define association here
    }*/
    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
    
  }
  
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};