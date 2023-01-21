/*const todoList = require('../index')

const {all, markAsComplete,add } = todoList();

const todos = todoList();
const formattedDate = d => {
  return d.toISOString().split("T")[0];
}
  
var dateToday = new Date();
  
const today = formattedDate(dateToday);
  
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
  
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
const toDisplayableList=()=>{
describe("TodoList Test Suite", ()=>{
    beforeAll(()=>{
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            },
            { title: 'Submit assignment', dueDate: yesterday, completed: false },
            { title: 'Pay rent', dueDate: today, completed: true },
            { title: 'Service Vehicle', dueDate: today, completed: false },
            { title: 'File taxes', dueDate: tomorrow, completed: false },
            { title: 'Pay electric bill', dueDate: tomorrow, completed: false }
        );
    })
    test("Should add new todo", ()=>{
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });

    test("Should mark a todo as complete", ()=>{
        for(var i=0;i<all.length;i++){
            if(all[i].completed==false){
                expect(all[i].completed).toBe(false);
                markAsComplete(i);
            expect(all[i].completed).toBe(true);
            }
            expect(all[i].completed).toBe(true);
        }
    });

    test("Should retrieve of overdue items", ()=>{
        for(var i=0;i<all.length;i++){
            if(all[i].dueDate == yesterday){
                expect(all[i].dueDate).toBe(yesterday);
            }
        }
    });

    test("Should retrieve of duetoday items", ()=>{
        for(var i=0;i<all.length;i++){
            if(all[i].dueDate == today && all[i].completed == false){
                expect(all[i].dueDate).toBe(today);
                expect(all[i].completed).toBe(false);
            }
        }
    });
});
}

toDisplayableList();*/

// __tests__/todo.js
/* eslint-disable no-undef */
const db = require("../models");

describe("Todolist Test Suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test("Should add new todo", async () => {
    const todoItemsCount = await db.Todo.count();
    await db.Todo.addTask({
      title: "Test todo",
      completed: false,
      dueDate: new Date(),
    });
    const newTodoItemsCount = await db.Todo.count();
    expect(newTodoItemsCount).toBe(todoItemsCount + 1);
  });
});