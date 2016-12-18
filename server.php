<?php
    include("repository.php");
    
    if ( isset( $_POST['category'] ) )
        get_foods( $_POST['category'] );
    else
        get_categories();

?>
