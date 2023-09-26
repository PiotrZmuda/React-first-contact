// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>

//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// ### 1. Personal Greeting Card

// import React from 'react';

// function GreetingCard(props) {
//   const {name} = props;

//   return (
//     <div>
//       <p>Hello, {"piotr"}!</p>
//     </div>
//   );
// }

// export default GreetingCard;

// ### 2. User Profile

// import React from 'react';

// function ProfilePicture({ src }) {
//   return <img style={{width: '300px'}} src={src} alt="Profile" />;
// }

// function ProfileDetails({ name, email }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

// function UserProfile({ name, email, imageUrl }) {
//   return (
//     <div>
//       <ProfilePicture src={imageUrl} />
//       <ProfileDetails name={name} email={email} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>User Profile
//       </h1>
//       <UserProfile
//         name="Jim Carrey"
//         email="jim@example.com"
//         imageUrl="https://d-tm.ppstatic.pl/kadry/5b/22/e2738da494f23ae4f4edddd616e2.1000.jpg"
//       />
//     </div>
//   );
// }

// export default App;

// ### 3. Like Button

// import { useState } from "react";

// function LikeButton() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <button onClick={() => setCount((count) => count + 1)}>
//           total clicks {count}
//         </button>
//       </div>
//     </>
//   );
// }

// export default LikeButton;

// ### 4. Todo List Item

// - Build a `Todo` component that displays a task. It should accept the task name as a prop and have a checkbox next to it.
//  When the checkbox is checked, the task name should have a strikethrough.

// import React from 'react';

// function App(){
//   return (
//     <div>
//       <h1>ToDo</h1>
//       <input type="text" placeholder='Add an item...' />
//       <input type="checkbox" name="deleteItem" id="" />
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';

// function Todo() {
//   const [task, setTask] = useState('');
//   const [isCompleted, setIsCompleted] = useState(false);

//   const handleTaskChange = (event) => {
//     setTask(event.target.value);
//   };

//   const handleCheckboxChange = () => {
//     setIsCompleted(!isCompleted);
//   };

//   return (
//     <div>
//       <label>
//         {/* Checkbox do zaznaczania/zdjęcia zadania */}
//         <input
//           type="checkbox"
//           checked={isCompleted}
//           onChange={handleCheckboxChange}
//         />
//         {/* Pole tekstowe do wprowadzania zadania */}
//         <input
//           type="text"
//           placeholder="Wpisz zadanie"
//           value={task}
//           onChange={handleTaskChange}
//           style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}
//         />
//       </label>
//     </div>
//   );
// }

// export default Todo;

// ### 5. Product List

// - Make a `Product` component which displays a product's name, price, and description passed as props.
// Then, make a ProductList component that takes an array of products and renders a list of `Product` components.

// import React from "react";

// function Product({ name, price, description }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>Price: {price}</p>
//       <p>Description: {description}</p>
//     </div>
//   );
// }

// function ProductList() {
//   const products = [
//     {
//       name: "Product 1",
//       price: 19.99,
//       description: "This is the first product.",
//     },
//     {
//       name: "Product 2",
//       price: 29.99,
//       description: "This is the second product.",
//     },
//     {
//       name: "Product 3",
//       price: 39.99,
//       description: "This is the third product.",
//     },
//   ];

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map((product, index) => (
//         <Product
//           key={index}
//           name={product.name}
//           price={product.price}
//           description={product.description}
//         />
//       ))}
//     </div>
//   );
// }

// export default ProductList;

// ### 6. Accordion

// - Design an `AccordionItem` component that has a title and hidden content. When the title is clicked,
// the hidden content should toggle visibility.Then, create an `Accordion` component that takes an array
//  of items (with titles and content) and renders them using the `AccordionItem` component.

// import React, { useState } from 'react';

// function AccordionItem({ title, content }) {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleAccordion = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <div>
//       <div onClick={toggleAccordion} style={{ cursor: 'pointer' }}>
//         <h3>Title{title}</h3>
//       </div>
//       {!isCollapsed && <div>"content content content content content content content content"{content}</div>}
//     </div>
//   );
// }

// function Accordion({ items }) {
//   return (
//     <div>
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           title={item.title}
//           content={item.content}
//         />
//       ))}
//     </div>
//   );
// }

// const items = [
//   {
//     title: 'Item 1',
//     content: 'Content for Item 1',
//   },
//   {
//     title: 'Item 2',
//     content: 'Content for Item 2',
//   },
//   {
//     title: 'Item 3',
//     content: 'Content for Item 3',
//   },
// ];

// function App() {
//   return (
//     <div>
//       <h1>Accordion Example</h1>
//       <Accordion items={items} />
//     </div>
//   );
// }

// export default App;


// ### 7. Comment System

// - Build a `Comment` component that takes username and commentText as props. Next, make a `CommentList` component that receives an array of comments. 
// This should display a list of comments, demonstrating props drilling as you pass individual comment details down to the `Comment` component.
//  Add a counter at the top of the `CommentList` showing the number of comments.