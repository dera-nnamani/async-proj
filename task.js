//Task 01
//Objective: Awaiting a call: Create an async function awaitCall that simulates fetching data from an API. use await for the API response and then log the data.
//create a function called awaitCall
async function awaitCall() {
  //simulate data fetching using the globally available FETCH method
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  //log the data from the API
  console.log(data);
}
//invoke the function or call it.
awaitCall();

//Task 02
// objective: Modify thr awaitCall function to handle errors gracefully.If the API call fails, catch the error and log a useer-friendly error message.
//modified to hanlde errors prorperly
async function awaitCallModified() {
  try {
    //simulate data fetching using the globally available FETCH method
    const response = await fetch("https://jsonplaceholder.typicode");
    const data = await response.json();
    //log the data from the API
    console.log(data);
  } catch (error) {
    //handle any error that might occur from the try block above
    console.log(error);
    console.log("sorry, an error occured");
  }
}
//invoke the function or call it
awaitCallModified();

//getPosts
async function getPosts() {
  //simulate data fetching using the globally available FETCH method
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  //log the data from the API
  console.log(data);
}

//getToDos
async function getTodos() {
  //simulate data fetching using the globally available FETCH method
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  //log the data from the API
  console.log(data);
}

//using promise.all to chain both async function together
const concurrentRequests = async () => {
  return await Promise.all([getPosts(), getTodos()]);
};
concurrentRequests();
