  <?php

  class Transaction {
    const host = 'localhost';
    const dbusername = 'root';
    const dbpassword = '123456';
    const dbname = 'testdb';

    
    public function __construct(){
  
       $conn= new mysqli($this->host, $this->dbusername,$this->dbpassword,$this->dbname);
        return $this->connection;
    }      
  }

?>