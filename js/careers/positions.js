import positions from '../data/positions.js'

// Handles inserting open positions into the page
document.addEventListener('DOMContentLoaded', () => {
	const positionsHolder = document.getElementById('positions-holder')
	if (!positionsHolder) throw 'No team holder, how?'

	for (const position of positions) {
		// Build the HTML card
		const item = document.createElement('li')

		const time = document.createElement('p')
		time.innerHTML = position.fullTime ? 'Full Time' : 'Part Time'
		item.appendChild(time)

		const link = document.createElement('a')
		link.innerHTML = position.name
		link.setAttribute(
			'href',
			`/listing.html?name=${encodeURIComponent(position.name)}`
		)
		item.appendChild(link)

		positionsHolder.appendChild(item)
	}

	console.log('Added', positions.length, 'items to Open Positions')
})
