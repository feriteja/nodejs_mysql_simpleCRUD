-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2019 at 01:07 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arkademybootcamp`
--

-- --------------------------------------------------------

--
-- Table structure for table `e_events`
--

CREATE TABLE `e_events` (
  `e_id` int(11) NOT NULL,
  `e_name` varchar(200) NOT NULL,
  `e_start_date` datetime NOT NULL,
  `e_end_date` datetime NOT NULL,
  `e_date_added` datetime NOT NULL,
  `e_date_modified` datetime NOT NULL,
  `e_desc` text NOT NULL,
  `e_location` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `e_events`
--

INSERT INTO `e_events` (`e_id`, `e_name`, `e_start_date`, `e_end_date`, `e_date_added`, `e_date_modified`, `e_desc`, `e_location`) VALUES
(1, 'Event 1', '2019-11-18 00:00:00', '2019-11-19 00:00:00', '2019-11-20 00:00:00', '2019-11-18 00:00:00', 'test desc', 'testcc location'),
(2, '222', '2019-11-20 00:00:00', '2019-11-20 00:00:00', '2019-11-21 00:00:00', '2019-11-21 00:00:00', 'dsfsf2222', 'asdasfds2222');

-- --------------------------------------------------------

--
-- Table structure for table `t_cashier`
--

CREATE TABLE `t_cashier` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_cashier`
--

INSERT INTO `t_cashier` (`id`, `name`) VALUES
(1, 'Pevita Pearce'),
(2, 'Raisa Andriana');

-- --------------------------------------------------------

--
-- Table structure for table `t_category`
--

CREATE TABLE `t_category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_category`
--

INSERT INTO `t_category` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Drink');

-- --------------------------------------------------------

--
-- Table structure for table `t_product`
--

CREATE TABLE `t_product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_cashier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_product`
--

INSERT INTO `t_product` (`id`, `name`, `price`, `id_category`, `id_cashier`) VALUES
(2, 'Cake', '20000', 1, 2),
(3, 'Brownies', '50000', 1, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `e_events`
--
ALTER TABLE `e_events`
  ADD PRIMARY KEY (`e_id`);

--
-- Indexes for table `t_cashier`
--
ALTER TABLE `t_cashier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_category`
--
ALTER TABLE `t_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `t_product`
--
ALTER TABLE `t_product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `e_events`
--
ALTER TABLE `e_events`
  MODIFY `e_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t_cashier`
--
ALTER TABLE `t_cashier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t_category`
--
ALTER TABLE `t_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `t_product`
--
ALTER TABLE `t_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
