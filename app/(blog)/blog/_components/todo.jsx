"use client";

import { useState, useEffect } from "react";

export default function Todo() {
	const [todo, setTodo] = useState({});

	useEffect(async () => {
		const response = await fetch(
			"http://localhost:3001/articles/1"
		);
		const result = await response.json();
		setTodo(result);
	}, []);

	return (
		<div>
			<h1>{todo.title}</h1>
		</div>
	);
}