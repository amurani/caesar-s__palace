<?php
    // error_reporting(0);

    $db_name = "plate";

	  mysql_connect("localhost", "root", "") or die("Hell is real");
	  mysql_select_db( $db_name ) or die("Hell is real");

  function get_categories() {
      global $db_name;
      $query = mysql_query("select table_name as category from information_schema.tables where table_schema = '$db_name'");
      $results = array();
      while ($row = mysql_fetch_assoc( $query ))
          $results[] = $row;
      echo json_encode($results);
  }

    function get_foods( $category ) {
        $results = array();
        $query = mysql_query("SELECT $category.id, $category.name, $category.price, $category.location FROM $category");
        while ($row = mysql_fetch_assoc( $query ))
            $results[] = $row;
        echo json_encode($results);
    }

  function get_starches() {
		$query = mysql_query("SELECT starch.id, starch.name, starch.price, starch.location FROM starch");
		while($rows = mysql_fetch_array($query))
		echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";
	}

	function get_proteins() {
		$query = mysql_query("SELECT proteins.id, proteins.name, proteins.price, proteins.location FROM proteins");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";
	}

	function get_greens() {
		$query = mysql_query("SELECT greens.id, greens.name, greens.price, greens.location FROM greens");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";
	}

	function get_drinks() {
    $query = mysql_query("SELECT drinks.id, drinks.name, drinks.price, drinks.location FROM drinks");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";
	}

  function get_all_foods() {
    $query = mysql_query("SELECT starch.id, starch.name, starch.price, starch.location FROM starch");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";

    $query = mysql_query("SELECT proteins.id, proteins.name, proteins.price, proteins.location FROM proteins");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";

		$query = mysql_query("SELECT greens.id, greens.name, greens.price, greens.location FROM greens");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";

		$query = mysql_query("SELECT drinks.id, drinks.name, drinks.price, drinks.location FROM drinks");
		while($rows = mysql_fetch_array($query))
			echo $rows[0].":".$rows[1].":".$rows[2].":".$rows[3]."@";
	}
?>
