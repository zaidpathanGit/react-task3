<?php

class TaskInfoModel extends CI_Model
{
    public function __constructor()
    {
        parent::__constructor();

        $this->load->database();
    }

    public function insertIntoTask($taskname, $projectname, $stime, $etime, $username)
    {
        return $this->db->insert(
            "taskinfo",
            array(
                "taskname" => $taskname, "projectname" => $projectname,
                "sdate" => $stime, "edate" => $etime, "created_by" => $username,
                "created_date" => date('Y/m/d')
            )
        );
    }

    public function getUserTask($username)
    {
        $this->db->where("created_by", $username);

        return $this->db->get("taskinfo")->result_array();
    }

    public function getUserTaskByDate($username, $date)
    {
        $this->db->where("created_by", $username);
        $this->db->where("created_date", $date);

        return $this->db->get("taskinfo")->result_array();
    }
}
