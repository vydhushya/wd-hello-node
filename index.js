const{ connect } = require("./connectDB");
const Todo = require("./TodoModel.js");

const createTodo = async () => {
  try{
    await connect();
    const todo = await Todo.addTask({
      title: "sixth Item",
      dotDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID : ${todo.id}`);
  } catch (error) {
    console.error(error);

  }
};

const countItems = async() =>{
  try{
    const totalCount = await Todo.count();
    console.log(`found ${totalCount} items in the table!`);
  }catch(error){
    console.error(error);
  }
}

const getAllTodos = async () => {
  try{
    const todos = await Todo.findAll({
      where: {
        completed:false
      },
      order: [
        ['id', 'DESC']//ASC=ascending, DESC=descending order
      ]
    });
    const todoList = todos.map(todo => todo.displayableString()).join("\n");
    console.log(todoList);
  }catch(error){
    console.error(error);
  }
}

const getSingleTodo = async () => {
  try{
    const todos = await Todo.findOne({
      where: {
        completed:true
      },
      order: [
        ['id', 'DESC']//ASC=ascending, DESC=descending order
      ]
    });
    console.log(todos.displayableString());
  }catch(error){
    console.error(error);
  }
}


const updateItem = async (id) => {
  try{
    await Todo.update({completed: true}, {
      where: {
        id: id
      },
    });
    
  }catch(error){
    console.error(error);
  }
}


const deleteItem = async (id) => {
  try{
    const deleteRowCount = await Todo.destroy( {
      where: {
        id: id
      },
    });
    console.log(`Deleted ${deleteRowCount} rows! = ${id}`);
    
  }catch(error){
    console.error(error);
  }
}


/*(async () => {
  await getAllTodos();
  //await createTodo();
  //await updateItem(3);
 //await getSingleTodo();
 //await deleteItem(1);
})();*/

const run = async () => {
  await getAllTodos();
  //await createTodo();
  //await updateItem(3);
 //await getSingleTodo();
 //await deleteItem(1);
};

run();