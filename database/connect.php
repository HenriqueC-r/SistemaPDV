<?php

class Database {
    private $host = "localhost";
    private $db_name = "SistemaPDV";
    private $username = "root";
    private $password = "Wasd1313@";
    public $conn;

    private function getConnection() {

        try {
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
            if ($this->conn->connect_error) {
                throw new Exception("Connection failed: " . $this->conn->connect_error);
            }
        } catch (Exception $e) {
            echo $e->getMessage();
        }

        return $this->conn;
    }
}

?>