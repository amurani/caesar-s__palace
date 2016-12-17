<?php
	error_reporting(0);
	mysql_connect("localhost", "kevinmur_root", "foobar#123") or die("Hell is real");
	mysql_select_db("kevinmur_portfolio_plate") or die("Hell is real");
	
	function get_starches(){
		$query = mysql_query("SELECT starch.name, starch.price, starch.location FROM starch");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";
	}
	
	function get_proteins(){
		$query = mysql_query("SELECT proteins.name, proteins.price, proteins.location FROM proteins");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";
	}
	
	function get_greens(){
		$query = mysql_query("SELECT greens.name, greens.price, greens.location FROM greens");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";
	}
	
	function get_drinks(){
                $query = mysql_query("SELECT drinks.name, drinks.price, drinks.location FROM drinks");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";
	}

        function get_all_foods(){
                $query = mysql_query("SELECT starch.name, starch.price, starch.location FROM starch");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";

                $query = mysql_query("SELECT proteins.name, proteins.price, proteins.location FROM proteins");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";

                $query = mysql_query("SELECT greens.name, greens.price, greens.location FROM greens");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";

		$query = mysql_query("SELECT drinks.name, drinks.price, drinks.location FROM drinks");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2]."@";
	}
?>