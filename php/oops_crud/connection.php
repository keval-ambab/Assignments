<?php

class Logic{

    private $host;
    private $dbusername;
    private $dbpassword;
    private $dbname;
    private $connection;
    private $tableName = 'emp';
    
    public function __construct(){
        $this->host ='localhost';
        $this->dbusername = 'keval';
        $this->dbpassword = '123456';
        $this->dbname = 'crud';

        $this->connection = new mysqli($this->host, $this->dbusername,$this->dbpassword,$this->dbname);
        return $this->connection;
    }


    public function create($name, $salary){
        
        $sql = "INSERT INTO $this->tableName (`name`, `salary`) VALUES ('$name', '$salary')";
        $result = $this->connection -> query($sql);

        return $result;
    }

    public function read($offset, $limit){
            
        $sql = "SELECT * FROM $this->tableName LIMIT $offset, $limit";
        $result = $this->connection -> query($sql);
        $data = [];

        if($result->num_rows > 0) {
            while($row = $result -> fetch_assoc()) {
                array_push($data, $row);
            }
        }
        return $data;

    }

    public function update($id,$name,$salary){
        $sql = "UPDATE $this->tableName SET name='$name',salary='$salary' WHERE id = '$id'";
        $result = $this->connection -> query($sql);

        return $result;
    }

    public function delete($id){
        $sql = "DELETE FROM $this->tableName WHERE id = '$id'";
        $result = $this->connection -> query($sql);

        return $result;
        
    }

    public function getPages($limit){
        $sql = "select * from emp";
        $result = $this->connection -> query($sql);
        $total_record = $result -> num_rows;
        $total_pages = ceil($total_record/$limit);
        return $total_pages;
        
    }




}


?>