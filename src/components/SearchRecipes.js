import React, { Component } from "react"
import { Form, FormControl, FormGroup, Button } from "react-bootstrap"
import { connect } from "react-redux"
import { setRecipes } from "../actions"

class SearchRecipes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ingredients: "",
			dish: "",
		}
	}

	search = () => {
		const { ingredients, dish } = this.state
		const url = `http://www.recipepuppy.com/api?=${ingredients}&q${dish}`
		fetch(url, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((json) => {
				this.props.setRecipes(json.results)
			})
	}

	render() {
		return (
			<Form inline>
				<FormGroup>
					<div>Ingredient</div>
					<FormControl
						type="text"
						placeholder="garlic, chicken"
						onChange={(event) =>
							this.setState({ ingredients: event.target.value })
						}
					/>
				</FormGroup>
				<FormGroup>
					<div>Dish</div>
					<FormControl
						type="text"
						placeholder="adobo"
						onChange={(event) => this.setState({ dish: event.target.value })}
					/>
				</FormGroup>
				<Button onClick={() => this.search()}>Submit</Button>
			</Form>
		)
	}
}

export default connect(null, { setRecipes })(SearchRecipes)
