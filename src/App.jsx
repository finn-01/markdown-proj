import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
	const [markdown, setMarkdonw] = useState("# markdown preview");

	return (
		<main>
			<section className="markdown">
				<textarea
					className="input"
					value={markdown}
					onChange={(e) => setMarkdonw(e.target.value)}
				></textarea>
				<article className="result">
					<ReactMarkdown>{markdown}</ReactMarkdown>
				</article>
			</section>
		</main>
	);
};

export default App;
