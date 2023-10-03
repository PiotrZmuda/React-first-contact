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
// - Create a simple "Greeting Card" component that takes a name prop and displays a message like "Hello, [name]!"

// import React from "react";

// function GreetingCard({ name }) {
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <GreetingCard name="Piotr" />
//       <GreetingCard name="Ewa" />
//     </div>
//   );
// }
// export default App;

// ### 2. User Profile

// - Create two components: `ProfilePicture` and `ProfileDetails`. `ProfilePicture` should accept a src prop for the image URL and ProfileDetails
// should accept name and email props. Then, compose these components inside a parent `UserProfile` component.

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
// - Create a `LikeButton` component. It should have a button that displays a count.
// Every time the button is clicked, the count should increase by one. Use the useState hook for this.

// import { useState } from "react";

// function LikeButton() {
//   const [count, setCount] = useState(0);

//   const handleButtonClick = () => {
//     setCount((count) => count + 1);
//   };
//   return (
//     <div>
//       <button onClick={handleButtonClick}>total clicks {count}</button>
//     </div>
//   );
// }

// export default LikeButton;

// ### 4. Todo List Item
// - Build a `Todo` component that displays a task. It should accept the task name as a prop and have a checkbox next to it.
// When the checkbox is checked, the task name should have a strikethrough.

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
//         <input
//           type="checkbox"
//           checked={isCompleted}
//           onChange={handleCheckboxChange}
//         />
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
//       <h2>Name: {name}</h2>
//       <p>Price: {price}</p>
//       <p>Description: {description}</p>
//     </div>
//   );
// }

// function ProductList() {
//   const products = [
//     {
//       name: "Apples",
//       price: 2.99,
//       description: "Apples from Poland",
//     },
//     {
//       name: "Bananas",
//       price: 5.99,
//       description: "bananas from Indonesia.",
//     },
//     {
//       name: "Vodka",
//       price: 39.99,
//       description: "vodka from Poland.",
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
//         <h3>{title}</h3>
//       </div>
//       {!isCollapsed && <div>{content}</div>}
//     </div>
//   );
// }

// function Accordion({ items }) {
//   return (
//     <div >
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           title ={item.title}
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
//     <div >
//       <h1>Accordion Example</h1>
//       <Accordion items={items} />
//     </div>
//   );
// }

// export default App

// ### 7. Comment System

// - Build a `Comment` component that takes username and commentText as props. Next, make a `CommentList` component that receives an array of comments.
// This should display a list of comments, demonstrating props drilling as you pass individual comment details down to the `Comment` component.
// Add a counter at the top of the `CommentList` showing the number of comments.

// import React from "react";

// function Comment({ name, text }) {
//   return (
//     <div>
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

// import React, { useState } from "react";

// function ThemeProvider() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [buttonText, setButtonText] = useState("Dark mode")

//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//     setButtonText(prevText => prevText === "Dark mode" ? "White mode" : "Dark mode")
//   };
//   const body = document.body;
//   body.style.backgroundColor = isDarkMode ? "black" : "white";

//   return (
//     <div>
//       <button onClick={toggleTheme}>{buttonText}</button>
//     </div>
//   );
// }

// export default ThemeProvider;

// ### 10. Advanced Comment System with Reply

// - Expand the Comment System from #7. For each comment, users should be able to click a "Reply" button to write a response.
// Replies should be nested under the original comment. The structure would look like this:
// import React from "react";

import React, { useState } from "react";

const newCommentStyle = {
  backgroundColor: "lightyellow",
  padding: "10px",
  margin: "10px",

};

const postReplayButton = {
  position: "absolute",
}

// // Komponent Comment, który wyświetla pojedynczy komentarz
function Comment({ name, text, index = "", level = 0 }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState([]);

  const handleReply = () => {
    setIsReplying(!isReplying);
  };

  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const handlePostReply = () => {
    if (replyText) {
      setReplies([...replies, { name: "Reply", text: replyText }]);
      setReplyText("");
      setIsReplying(false);
    }
  };

  return (
    <div style={level > 0 ? newCommentStyle : null}>
      <strong>{name} {index}</strong> {text}
      <button onClick={handleReply}>Reply</button>
      {isReplying && (
        <div>
          <textarea
            placeholder="Write your reply..."
            value={replyText}
            onChange={handleReplyTextChange}
          />
          <button style={postReplayButton} onClick={handlePostReply}>Post Reply</button>
        </div>
      )}
      {replies.map((reply, idx) => (
        <Comment
          key={idx}
          name={reply.name}
          text={reply.text}
          index={`${index}.${idx + 1}`}
          level={level + 1}
        />
      ))}
    </div>
  );
}

function CommentList({ comments }) {
  return (
    <div>
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          name={comment.name}
          text={comment.text}
          onReply={(replyText) => {
            comment.replies = comment.replies || [];
            comment.replies.push(replyText);
          }}
          index={`${index + 1}`}
        />
      ))}
    </div>
  );
}

function App() {
  const comments = [
    { name: "User1", text: "This is the first comment." },
    { name: "User2", text: "Another comment here." },
    { name: "User1", text: "Another comment here." },
    { name: "User2", text: "Another comment here." },
  ];

  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
