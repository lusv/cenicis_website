$(document).ready(function(){	
	points = [[130, 50], [170, 50], [210, 50], [250, 50],
				[210, 90], [250, 90],
				[170, 130], [250, 130],
				[130, 170], [250, 170],
				[90, 210],
				
				
				];
	$('div#bottom_content').mouseleave(function() {
		resetBlocks(points, '#bottom_content');
	});

	
	drawBlocks(points, '#bottom_content');
});