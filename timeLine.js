document.getElementById('timeline').addEventListener('change', (e) => {
		console.log(e.target.value)
		const timelineInput = parseInt(e.target.value, 10);
		filterBy(timelineInput);
		});
//https://docs.mapbox.com/mapbox-gl-js/example/timeline-animation/?fbclid=IwAR3m_JXNJaiOBfc_XkXClvzY5cA62pgjnpLvPqCxO0_-JoHnnoTcwULaTZY

