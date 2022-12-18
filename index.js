const todoList = () => {
  let all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    var date=[]
    for(var i=0;i<todos.all.length;i++){
      if(todos.all[i].dueDate==yesterday){
        date.push(todos.all[i])
      }
    }
    return date;
    // ..
    // ..
    //
    //
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var date=[]
    for(var i=0;i<todos.all.length;i++){
      if(todos.all[i].dueDate==today){
        date.push(todos.all[i])
      }
    }
    return date;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var date=[]
    for(var i=0;i<todos.all.length;i++){
      if(todos.all[i].dueDate==tomorrow){
        date.push(todos.all[i])
      }
    }
    return date;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
      var s=""
      for(var i=0;i<list.length;i++){
        if(list[i].dueDate==today){
          if(list[i].completed){
            s= s+"[x] "+list[i].title+"\n";
          }
          else{
            s=s+"[ ] "+list[i].title+"\n";
          }
        }
        else if(list[i].dueDate==yesterday){
          s=s+'[ ] '+list[i].title+" "+yesterday+"\n";
        }
        else{
          s=s+'[ ] '+list[i].title+" "+tomorrow+"\n";
        }
      }
      return s
    }
  

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
};

module.exports = todoList;



  