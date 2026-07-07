<?php

class Produto {

    private $conn;

    public function __construct() {
        $db = new Database();
        $this->conn = $db->getConnection();
    }

    public function buscarTodos() {

        $query = "SELECT * FROM produtos";
        $result = $this->conn->query($query);

        if ($result->num_rows > 0) {
            $produtos = array();

            while ($row = $result-> fetch_assoc()) {
                $produtos[] = $row;
            }

            return $produtos;
        }
        return [];
    }

    public function buscarCodigo($codigoBarras) {

        $query = "SELECT * FROM produtos WHERE codigo_barras = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("s", $codigoBarras);
        $stmt->execute();
        
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {

            $produto = $result->fetch_assoc();
            $stmt->close();
            return $produto;

        } else {
            
            $stmt->close();
            return null;
        
        }

    }

}

?>