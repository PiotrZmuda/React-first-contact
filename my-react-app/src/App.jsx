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

// import React from "react";

// function GreetingCard({ name }) {
//   return (
//     <div>
//       <p>Hello, {"Piotr"}!</p>
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
//       <h3>Email: {email}</h3>
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
//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         total clicks {count}
//       </button>
//     </div>
//   );
// }

// export default LikeButton;

// ### 4. Todo List Item

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
//       {!isCollapsed && <div>"content content content content content content content content" {content}</div>}
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

// import React from "react";
// import InnyKomponent from "./test.jsx";
// import Button from "./Button.jsx";
// import "./App.css";

// function Hello() {
//   return <h1>Witaj piękny Świecie!</h1>;
// }

// function App() {
//   return (
//     <>

//     <h1>{name}</h1>
//       <div className="myClass">
//         <p>Devstock rules!!!</p>
//         <Button text="Wyślij" />
//       </div>
//       <div>
//         <Hello />
//         <InnyKomponent />
//         <Button text="Anuluj" />
//       </div>
//     </>
//   );
// }

// export default App;

// ### 7. Comment System

// import React from "react";

// function Comment({ name, text }) {
//   return (
//     <div className="comment">
//       <strong>{name}</strong>
//       {text}
//     </div>
//   );
// }
// function CommentList({ comments }) {
//   return (
//     <div>
//       <h2>Comments ({comments.length})</h2>
//       {comments.map((comment) => (
//         <Comment name={comment.name} text={comment.text} />
//       ))}
//     </div>
//   );
// }

// function App() {
//   const comments = [
//     { name: "User1", text: " This is the first comment." },
//     { name: "User2", text: " Another comment here." },
//     { name: "User1", text: " Another comment here." },
//     { name: "User2", text: " Another comment here." },
//   ];

//   return (
//     <div>
//       <CommentList comments={comments} />
//     </div>
//   );
// }

// export default App;

// ### 8. Dynamic Tabs

// - Create a `Tab` component that takes a label and children. Then, make a `TabList` component that composes multiple Tab components.
// Only the content of the selected tab should be visible. This will involve passing down callback functions as props and lifting up state.

// import React, { useState } from "react";

// function Tab({ label, children }) {
//   return (
//     <div>
//       <h2>{label}</h2>
//       <div>{children}</div>
//     </div>
//   );
// }

// function TabList({ children }) {
//   const [selectedTab, setSelectedTab] = useState(0);

//   const handleTabClick = (index) => {
//     setSelectedTab(index);
//   };

//   return (
//     <div>
//       <ul>
//         {React.Children.map(children, (child, index) => (
//           <li
//           style={{
//             cursor: "pointer",
//             backgroundColor: selectedTab === index ? "gray" : "initial",

//           }}
//             key={index}
//             onClick={() => handleTabClick(index)}
//             className={selectedTab === index ? "active" : ""}
//           >
//             {child.props.label}
//           </li>
//         ))}
//       </ul>
//       <div>{children[selectedTab]}</div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       <h1>Tab Example</h1>
//       <TabList>
//         <Tab label="Tab 1">Content for Tab 1</Tab>
//         <Tab label="Tab 2">Content for Tab 2</Tab>
//         <Tab label="Tab 3">Content for Tab 3</Tab>
//       </TabList>
//     </div>
//   );
// }

// export default App;

// ### 9. Theme Switcher

// - Design a `ThemeProvider` component that wraps around other components and provides a light or dark theme to them.
// Components inside `ThemeProvider` should change their background and text colors based on the theme.
// Use useState to toggle between light and dark themes. Also, implement a `ThemeButton` inside the `ThemeProvider` to toggle the theme.


