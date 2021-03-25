import people from '../data/people.js'

// Handles inserting team members into the page
document.addEventListener('DOMContentLoaded', () => {
	const teamHolder = document.getElementById('team-holder')
	if (!teamHolder) throw 'No team holder, how?'

	for (const person of people) {
		// Build the HTML card
		const card = document.createElement('div')
		card.setAttribute('class', 'person')
		card.setAttribute('style', `background-image: url("${person.img}");`)

		const aspect = document.createElement('div')
		aspect.setAttribute('class', 'aspect')
		card.appendChild(aspect)

		const details = document.createElement('div')
		details.setAttribute('class', 'details')

		const name = document.createElement('h1')
		name.innerHTML = person.name // TODO: Escape this text, possible XSS risk
		details.appendChild(name)

		const role = document.createElement('p')
		role.innerHTML = person.position // TODO: Escape this text, possible XSS risk
		details.appendChild(role)

		card.appendChild(details)
		teamHolder.appendChild(card)
	}

	console.log('Added', people.length, 'cards to The Team')
})
