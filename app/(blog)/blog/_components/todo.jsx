"use client";

import { useState, useEffect } from "react";

export default function Todo() {
	const [todo, setTodo] = useState({});

	useEffect(() => {
		async function fetchData() {
		  try {
			const response = await fetch("http://localhost:3001/articles/1");
			const result = await response.json();
			setTodo(result);
		  } catch (error) {
			console.error("Error fetching data:", error);
		  }
		}
	  
		fetchData();
	  }, []);
	  

	return (
		<div key={todo.id}>
			<h1 key={todo.id}>{todo.title}</h1>
		</div>
	);
}