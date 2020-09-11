import React from "react"
import SearchRecipes from "./components/SearchRecipes"
import RecipeList from "./components/RecipeList"

import "./styles/index.css"

function App() {
	return (
		<div>
			<h2>Recipe Finder</h2>
			<SearchRecipes />
			<RecipeList />
		</div>
	)
}

export default App
