<script>
	export let circleWidth = 70;
	export let text = 'Funded';
	export let percentage;
	export let strokeWidth = 5;
	export let strokeColor = '#FFB57F47';
	export let barColor = '#FB700A';

	const radius = (circleWidth - strokeWidth) / 2;
	const viewBox = `0 0 ${circleWidth} ${circleWidth}`;
	const dashArray = radius * Math.PI * 2;
	const dashOffset = dashArray - (dashArray * percentage) / 100;
</script>

<svg
	width={circleWidth}
	height={circleWidth}
	{viewBox}
	style="background-color: {strokeColor}; border-radius: 100%;"
>
	<circle
		cx={circleWidth / 2}
		cy={circleWidth / 2}
		r={radius}
		fill="transparent"
		stroke-width="{strokeWidth}px"
	/>
	<circle
		stroke={barColor}
		cx={circleWidth / 2}
		cy={circleWidth / 2}
		r={radius}
		fill="transparent"
		stroke-width="{strokeWidth}px"
		transform="rotate(-90 {circleWidth / 2} {circleWidth / 2})"
		style="stroke-dasharray: {dashArray}; stroke-dashoffset: {dashOffset}; stroke-linecap: round; stroke-linejoin: round;"
	/>
	<text
		x="50%"
		y="38%"
		dy=".3em"
		text-anchor="middle"
		stroke="#361904"
		font-size="14"
		font-weight="300"
		font-family="Roboto"
		letter-spacing="1"
	>
		{percentage}%
	</text>
	<text
		x="50%"
		y="62%"
		dy=".3em"
		text-anchor="middle"
		fill="#361904"
		font-size="10"
		font-weight="500"
	>
		{text}
	</text>
</svg>
