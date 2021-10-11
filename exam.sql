-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2021 at 10:49 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exam`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'PHP'),
(2, 'Jquery'),
(3, 'Angular');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `option1` varchar(255) NOT NULL,
  `option2` varchar(255) NOT NULL,
  `option3` varchar(255) NOT NULL,
  `option4` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `category_id`, `question`, `option1`, `option2`, `option3`, `option4`, `answer`) VALUES
(1, 1, 'What is PHP', 'A', 'B', 'C', 'D', 'B'),
(2, 1, 'What is PEAR in PHP', 'A', 'B', 'C', 'D', 'C'),
(3, 1, 'Who is known as the father of PHP', 'A', 'B', 'C', 'D', 'A'),
(4, 1, 'What was the old name of PHP', 'A', 'B', 'C', 'D', 'D'),
(5, 1, 'What is the name of scripting engine in PHP', 'A', 'B', 'C', 'D', 'C'),
(6, 2, 'What is Jquery', 'A', 'B', 'C', 'D', 'B'),
(7, 2, 'What is element in Jquery', 'A', 'B', 'C', 'D', 'C'),
(8, 2, 'Who is known as the father of Jquery', 'A', 'B', 'C', 'D', 'A'),
(9, 2, 'What was the old name of Jquery', 'A', 'B', 'C', 'D', 'D'),
(10, 2, 'What is the name of scripting engine in Jquery', 'A', 'B', 'C', 'D', 'C'),
(11, 3, 'What is Angular', 'A', 'B', 'C', 'D', 'B'),
(12, 3, 'What is element in Angular', 'A', 'B', 'C', 'D', 'C'),
(13, 3, 'Who is known as the father of Angular', 'A', 'B', 'C', 'D', 'A'),
(14, 3, 'What was the old name of Angular', 'A', 'B', 'C', 'D', 'D'),
(15, 3, 'What is the name of scripting engine in Angular', 'A', 'B', 'C', 'D', 'C');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
