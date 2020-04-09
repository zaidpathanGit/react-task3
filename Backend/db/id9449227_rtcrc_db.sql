-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 09, 2020 at 12:11 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id9449227_rtcrc_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `reguser`
--

CREATE TABLE `reguser` (
  `uid` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `created_by` text NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reguser`
--

INSERT INTO `reguser` (`uid`, `username`, `password`, `email`, `created_by`, `created_date`) VALUES
(2, 'zaidpathan339@gmail.com', '4297f44b13955235245b2497399d7a93', 'zaidpathan339@gmail.com', 'zaidpathan339@gmail.com', '2020-04-05'),
(3, 'user123', '4297f44b13955235245b2497399d7a93', '123123', 'user123', '2020-04-08'),
(4, 'user456', '4297f44b13955235245b2497399d7a93', '123123', 'user456', '2020-04-08');

-- --------------------------------------------------------

--
-- Table structure for table `reguser_token`
--

CREATE TABLE `reguser_token` (
  `uid` int(11) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reguser_token`
--

INSERT INTO `reguser_token` (`uid`, `token`) VALUES
(2, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InphaWRwYXRoYW4zMzlAZ21haWwuY29tIn0.BiiddDoO_iJtS1wVi7hEVdW-RRvcjmIwTqLMD4PMx9E'),
(3, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXIxMjMifQ.fiJX7zxREpzCfpCnnSqMY0nkqSfau8R9XVFA4yIvvZU'),
(4, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXI0NTYifQ.O07Tplep6dqWWlxCc-xmi9FU2zuXpi6MVWBwVC-qL0M');

-- --------------------------------------------------------

--
-- Table structure for table `taskinfo`
--

CREATE TABLE `taskinfo` (
  `taskid` int(11) NOT NULL,
  `taskname` text NOT NULL,
  `projectname` text NOT NULL,
  `sdate` time NOT NULL,
  `edate` time NOT NULL,
  `created_by` text NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `taskinfo`
--

INSERT INTO `taskinfo` (`taskid`, `taskname`, `projectname`, `sdate`, `edate`, `created_by`, `created_date`) VALUES
(26, 'Task 1', 'Project 1', '10:00:00', '10:01:00', 'zaidpathan339@gmail.com', '2020-04-06'),
(28, 'Task 2', 'Project 1', '10:00:00', '13:00:00', 'zaidpathan339@gmail.com', '2020-04-07'),
(29, 'Task 1', 'Project 1', '10:00:00', '11:00:00', 'user123', '2020-04-08'),
(30, 'Task 2', 'Project 1', '11:10:00', '11:20:00', 'user123', '2020-04-08'),
(31, 'Task 3', 'Project 3', '23:00:00', '23:20:00', 'zaidpathan339@gmail.com', '2020-04-08'),
(32, 'Task 4', 'Project 4', '23:10:00', '23:15:00', 'zaidpathan339@gmail.com', '2020-04-09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reguser`
--
ALTER TABLE `reguser`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `reguser_token`
--
ALTER TABLE `reguser_token`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `taskinfo`
--
ALTER TABLE `taskinfo`
  ADD PRIMARY KEY (`taskid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reguser`
--
ALTER TABLE `reguser`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `reguser_token`
--
ALTER TABLE `reguser_token`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `taskinfo`
--
ALTER TABLE `taskinfo`
  MODIFY `taskid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reguser_token`
--
ALTER TABLE `reguser_token`
  ADD CONSTRAINT `reguser_token_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `reguser` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
