
export default async function PostDetails({ postId }) {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});
	const response = await fetch(
		`http://localhost:3001/articles/${postId}`,
		{
			next: {
				revalidate: 120,
			},
		}
	);
	const post = await response.json();

	return (
		<div>
			<div
				style={{
					width: "100%",
					background: "white",
					padding: "10px",
					borderRadius: "10px",
					color: "black",
					marginTop: "20px",
				}}
			>
				<h1>{post.title}</h1>

				<hr />

				<p>{post.content}</p>
			</div>
		</div>
	);
}