<?php

class ReguserModel extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function insertIntoReguser($username, $password, $email)
    {
        try {
            return $this->db->insert(
                "reguser",
                array(
                    "username" => $username, "password" => $password, "email" => $email,
                    "created_by" => $username, "created_date" => date('Y/m/d')
                )
            );
        } catch (\Exception $e) {
            die($e->getMessage());
        }
    }

    public function searchUser($username, $password)
    {
        $this->db->where("username", $username);

        if ($password != null) {
            $this->db->where("password", $password);
        }

        return $this->db->get("reguser")->result_array();
    }
}
