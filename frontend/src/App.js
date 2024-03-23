// import { useEffect,useState,usestate } from "react"
// import "./App.css"
// import React from 'react'
// import Test1 from './components/test1/Test1'
// import Test2 from "./components/test2/Test2"
// //import {useState} from 'react'
// function App(){
//   let [posts,setPosts]=useState([])
//   let [users,setUsers]=useState([])
//   let[err,setErr]=useState('')


//   useEffect(()=>{
//   console.log("Use effect executed")
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res=>res.json())
//   .then(postsList=>setPosts(postsList))
//   .catch(err=>{
//     console.log(err.message)
//     setErr(err.message)
//   })

// },[])
// function getData()
// {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res=>res.json())
//   .then(usersList=>setUsers(usersList))

// }
// console.log("Component Rendered")
//   return(
//     <div>
//     <h1>Root component</h1>
//     <button onClick={getData}>Get some other data</button>
//     {users.length!=0 && <h1>{users.map(a=><p>{a.name}</p>)}</h1>}
//     {posts.length===0 && <h1>Loading.....</h1>}
//     {
//      err.length!=0?(<h1>{err}</h1>):(


//     <table>
//       <thead>
//         <tr>
//           <th>userId</th>
//           <th>id</th>
//           <th>title</th>
//           <th>body</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//            posts.map(postObj=>(<tr key={postObj.id}>
//             <td>{postObj.userId}</td>
//             <td>{postObj.id}</td>
//             <td>{postObj.title}</td>
//             <td>{postObj.body}</td>
//           </tr>))
//         }
//       </tbody>
//     </table>
// )}
//     </div>  
//   )
// }
// export default App;



// //   //state or stateless component
// //   //every component shd return return react element 
// //   //function
// //   let[status,setStatus]=useState(true)
// //   function changestatus(){
// // 	setStatus(!status)
// //   }
// //   let [username,setUsername]=useState('Kavya')
// //   let [person,setPerson]=useState({name:"Kavya",city:"Hyderabad"})
// //   let [counter,setCounter]=useState(0)
// //   function increment(){
// //     setCounter(counter+1)
// //   }
// // function decrement(){
// //   setCounter(counter-1)
// // }
// // function incrementByValue(x){
// //          setCounter(x)
// // }
// // function getNewName(){
// //   setUsername('Kavya_changed')
// // }
// // function getNewPlace(){
// // 	setUsername('Hyderabad_changed')
// //   }
// // function changePerson(){
// //   setPerson({...person,name:'Kavya_changed'})
// // }
// // function changePlace(){
// // 	setPerson({...setPerson,name:'Hyderabad_changed'})
// //   }
// //   return (
// //     <div>
// //       <h1>{counter}</h1>
// //       <button onClick={increment}>+</button>
// //       <button onClick={decrement}>-</button>
// //       <button onClick={()=>incrementByValue(100)}>incrementByValue</button>
// //       <h1>{username}</h1>
// //       <button onClick={getNewName}>ChangeName</button>
// //       <h1>{person.name}</h1>
// //       <h1>{person.city}</h1>
// //       <button onClick={changePerson}>Change person Details</button>
// // 	  <button onClick={changePlace}>Change place Details</button>

// // 	  {status===false ? <h1>status_is_true</h1>:<h1>status_is_false</h1>}

// //     </div>
// //   )

// //Forms
// // import './App.css'
// // import FormDemo from './components/form-demo/FormDemo';
// // import Test1 from './components/test1/Test1'
// // import Test2 from './components/test2/Test2'
// // import { useEffect,useState } from 'react';


// // function App(){
// //   return(
// //     <div>
// //            <FormDemo />
// //     </div> 

// //  );
// // }
// // export default App; 


// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import RootLayout from './RootLayout';
// function App() {
//   const browserRouter = createBrowserRouter([
//     {
//       path: "",
//       element: <RootLayout />
//     }
//   ])

//   return (
//     <div>

//       {/* <RouterProvider router={browserRouter} /> */}
//       <RouterProvider router={browserRouter} />


//     </div>
//   )
// }
// export default App

// import './App.css';
// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import RootLayout from './RootLayout';
// import home from './components/home/Home';//(home):should select folder name
// import signup from'./components/signup/SignUp';//(signup):should select folder name
// import signin from'./components/signin/SignIn';//(signin):should select folder name
// import about from './components/about/About';//(about):should select folder name

// // import FormDemo from './components/form-demo/FormDemo';
// // import Test1 from './components/test1/Test1'
// // import Test2 from './components/test2/Test2'
// // import { useEffect,useState } from 'react';
// // //import {useState} from 'react'

// function App(){
//   const browserRouter = createBrowserRouter([
//     //routing configuration
//     {
//       path:"",
//       element:<RootLayout />,
//       children:[
//         {
//           path:'',
//           element:<home />//home:Folder-name
//         },
//         {
//           path:'signup',
//           element:<signup />//signup:Folder-name
//         },
//         {
//           path:'signin',
//           element:<signin />//signin:Folder-name
//         },
//         {
//           path:'about',
//           element:<about />//about:Folder-name
//         }
//       ]
//     }
//   ]);

//   return(   
// <div>
//   <RouterProvider router={browserRouter} />
// </div>
// )
//     {/* <FormDemo />
//     </div>  */}
//   {/* ); */}
//   }
//   export default App;
import "./App.css"
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import RootLayout from "./RootLayout"
import Home from "./components/home/Home"
import SignUp from "./components/signup/SignUp"
import SignIn from "./components/signin/SignIn"
import About from "./components/about/About"
import UserProfile from "./components/user-profile/UserProfile"
import AuthorProfile from "./components/author-profile/AuthorProfile"
import AddArticle from "./components/add-article/AddArticle"
import ArticlesOfAuthor from "./components/articles-of-author/ArticlesOfAuthor"
// import SignUp from "./components/signup/SignUp"
// import SignIn from "./components/signin/SignIn"


function App(){
  //create browser router object
  const browserRouter = createBrowserRouter([
   //routing configuration
    {
        path:"",
        element:<RootLayout />,
        children:[
          {
            path:'',
        element:<Home />
      },
          {
            path:'signup',
        element:<SignUp />
          },
          {
            path:'signin',
        element:<SignIn />
          },
          {
            path:'about',
        element:<About />
          },
          {
            path:'user-profile',
        element:<UserProfile />
          },
          
          {
            path:'author-profile',
            element:<AuthorProfile />,
            children:[
              {
                path:'add-article',
                element:<AddArticle/>
              },
              {
                path:'article-of-author',
                element:<ArticlesOfAuthor/>
              }
            ]
          }
        ]
    },

  ]);


  return(
    <div>
      {/*providiing browser router to app */}
      <RouterProvider router={browserRouter} />
    </div>
  )
}

export default App