<?php
    $db = new SQLite3('mydb.sq3');
    $sql = "SELECT * FROM users";
    $result = $db->query($sql);
    while ($row = $result->fetchArray(SQLITE3_ASSOC)){
        echo $row['id'] . ' ' . $row['user_name']. ' ' . $row['full_name'] . '<br/>';
    }
    unset($db);
 ?>
    
    