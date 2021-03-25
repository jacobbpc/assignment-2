import positions from './data/positions.js'

document.addEventListener('DOMContentLoaded', () => {
	// Get the listing name from the page URL
	// This was inserted by the careers page when navigating to a specific listing
	const search = new URLSearchParams(window.location.search)
	const listingName = search.get('name')
	if (!listingName) throw 'No listing name'

	// Get the listing data from the listing name
	const listingData = positions.find((i) => i.name === listingName)
	if (!listingData) throw 'No listing data'

	// Fill the page with dynamic content depending on the listing name
	{
		const listingName = document.getElementById('listing-name')
		if (listingName) listingName.innerHTML = listingData.name
	}
	{
		const listingHours = document.getElementById('listing-hours')
		if (listingHours)
			listingHours.innerHTML = listingData.fullTime
				? 'Full Time'
				: 'Part Time'
	}
})
