-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2026 at 04:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cryptomania`
--

-- --------------------------------------------------------

--
-- Table structure for table `cryptofolio`
--

CREATE TABLE `cryptofolio` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` varchar(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `totalValue` varchar(30) NOT NULL,
  `bought_on` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cryptofolio`
--

INSERT INTO `cryptofolio` (`id`, `name`, `price`, `amount`, `totalValue`, `bought_on`) VALUES
(45, 'Summon: Bahamut', '21.76', 89, '1936.64', '2026-03-30'),
(48, 'Ultima, Origin of Ob', '0.74', 6, '4.44', '2026-04-12'),
(49, 'Ultima, Origin of Ob', '0.74', 2, '1.48', '2026-04-12'),
(50, 'Adelbert Steiner', '0.16', 1, '0.16', '2026-04-12'),
(51, 'Lightning Helix', '0.66', 11111, '7333.26', '2026-04-12'),
(52, 'Electrolyze', '0.5', 7, '3.5', '2026-04-12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cryptofolio`
--
ALTER TABLE `cryptofolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cryptofolio`
--
ALTER TABLE `cryptofolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
