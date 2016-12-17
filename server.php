<?php
	include("repository.php");
	switch($_GET['what']){
                case '0':
                        get_all_foods();
                        break;
		case '1':
			get_starches();
			break;
		case '2':
			get_proteins();
			break;
		case '3':
			get_greens();
			break;
		case '4':
			get_drinks();
			break;
	}
?>