<?

class DB {
    
    private static $_instance = null;
        
    private $_pdo, 
            $_query,
            $_error = false,
            $_results,
            $_count = 0;
    
    function __construct() {
        try {
            $dbconfig = parse_ini_file('../../../../private/dbconfig.ini.php');
            $this->_pdo = new PDO(
                    'mysql:
                        host='.$dbconfig['db_host'].';
                        dbname='.$dbconfig['db_name'], 
                        $dbconfig['username'],
                        $dbconfig['password']
            );
            // echo "connected";
        } catch(PDOException $e) {
            die($e->getMessage());
        }
    }
    
    public static function getInstance() {
        if(!isset(self::$_instance)) {
            self::$_instance = new DB();
        }
        return self::$_instance;
    }
    
    function query($sql, $params = array()) {
        $this->_error = false;
        if($this->_query = $this->_pdo->prepare($sql)) {
            // echo " Success";
            // echo "<br>".$sql."<br>";
            // print_r($params);
            $x = 1;
            if(count($params)) {
                foreach($params as $param) {
                    // echo $param;
                    $this->_query->bindValue($x, $param);
                    $x++;
                    // echo $x."<br>";
                }
            }

            if($this->_query->execute()) {
                // echo "Success";
                $this->_results = $this->_query->fetchAll(PDO::FETCH_OBJ);
                $this->_count = $this->_query->rowCount();
            } else {
                $this->_error = true;
            }
        }

        return $this;
    }
    
    
    public function action($action, $table, $where = array()) {
        if(count($where) === 3) {
            $operators = array('=', '>', '<', '>=', '<=');

            $field      = $where[0];
            $operator   = $where[1];
            $value      = $where[2];

            if(in_array($operator, $operators)) {
                $sql = "{$action} FROM {$table} WHERE {$field} {$operator} ?";
                if(!$this->query($sql, array($value))->error()) {
                    return $this;
                }
            }
        }
        return false;
    }
    
    
    function get($table, $where) {
        return $this->action('SELECT *', $table, $where);
    }
    
    public function results() {
        return $this->_results;
    }

    public function first() {
        return $this->results()[0];
    }

    public function error() {
        return $this->_error;
    }

    public function count() {
        return $this->_count;
    }    

    
}