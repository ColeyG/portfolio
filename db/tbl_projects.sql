-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 08, 2018 at 02:51 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `proj_id` int(10) UNSIGNED NOT NULL,
  `proj_title` varchar(300) NOT NULL,
  `proj_slug` varchar(1000) NOT NULL,
  `proj_link` varchar(300) NOT NULL,
  `proj_image` varchar(300) NOT NULL,
  `proj_longDesc` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`proj_id`, `proj_title`, `proj_slug`, `proj_link`, `proj_image`, `proj_longDesc`) VALUES
(3, 'Bach Counselling', 'Family Therapy Website', '#', 'images/projectHeaders/library.jpg', 'A simple site for customer to client conversion. This site was built to give a very simple way to take control of an online brand and bring in those interested.'),
(4, 'Blank Barden', 'Professional Photography Online', '#', 'images/projectHeaders/bb.png', 'For the photo gurus, this site was built for quick deployment with a client\'s ease of use in mind. I\'ve paired the design with a simple custom cms for a very quick deployment of content directed by the client.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`proj_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `proj_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
