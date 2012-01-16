$(document).ready(function(){
	points = [[100, 30], [140, 30], [180, 30], [220, 30],
				[100, 70], [210, 70],
				[100, 110], [210, 110],
				[100, 150], [140, 150], [180, 150], [220, 150],
				[160, 190],
				[80, 270], [100, 260], [120, 250], [140, 240], [160, 230], [180, 240], [200, 250], [220, 260], [240, 270],
				[160, 270],
				[160, 310],
				[160, 350],
				[140, 390], [180, 390],
				[130, 410], [190, 410],
				[120, 430], [200, 430]
			];

	draw_blocks(points, '#right_content');
	start_blocks_animation();
	
	menu_points = [[25, 25]];
	var links = ['<a href="./inicio.html">Regresar</a>'];
	draw_menu(menu_points, 'div#backer', links, 'left');
});
