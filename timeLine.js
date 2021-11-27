function filterBy(year) {
	const filterYears = ['<=', ['number', ['get', 'year']], year];
	
	for(const eventType of ["tsunamis", "earthquakes", "eruptions"]){
		map.setFilter(eventType, filterYears)
		// Set the label to the year
	document.getElementById('year').textContent = year;
	}}


 
	document.getElementById('timeline').addEventListener('change', (e) => {
		console.log(e.target.value)
		const timelineInput = parseInt(e.target.value, 10);
		filterBy(timelineInput);
		});
