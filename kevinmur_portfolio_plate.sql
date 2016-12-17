-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Dec 17, 2016 at 10:40 AM
-- Server version: 10.0.28-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `plate`
--

-- --------------------------------------------------------

--
-- Table structure for table `drinks`
--

CREATE TABLE IF NOT EXISTS `drinks` (
  `name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` (`name`, `price`, `location`) VALUES
('Bananamilkshake', 100, 'images/drinks/bananamilkshake.jpg'),
('Cafelatte', 100, 'images/drinks/cafelatte.jpg'),
('Cappuccino', 100, 'images/drinks/cappuccino.jpg'),
('Coffee', 100, 'images/drinks/coffee.jpg'),
('Espresso', 100, 'images/drinks/espresso.jpg'),
('Hotchoclate', 100, 'images/drinks/hotchoclate.jpg'),
('Juice', 100, 'images/drinks/juice.jpg'),
('Mocha', 100, 'images/drinks/mocha.jpg'),
('Smoothie', 100, 'images/drinks/smoothie.jpg'),
('Soda', 100, 'images/drinks/soda.jpg'),
('Strawberrymilkshake', 100, 'images/drinks/strawberrymilkshake.jpg'),
('Tea', 100, 'images/drinks/tea.jpg'),
('Vanillamilkshake', 100, 'images/drinks/vanillamilkshake.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `greens`
--

CREATE TABLE IF NOT EXISTS `greens` (
  `name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `greens`
--

INSERT INTO `greens` (`name`, `price`, `location`) VALUES
('Caesar', 100, 'images/greens/caesar.jpg'),
('Chefs', 100, 'images/greens/chefs.jpg'),
('Chicken', 100, 'images/greens/chicken.jpg'),
('Classicamericanvegie', 100, 'images/greens/classicamericanvegie.jpg'),
('Coleslaw', 100, 'images/greens/coleslaw.jpg'),
('Garden', 100, 'images/greens/garden.jpg'),
('Greek', 100, 'images/greens/greek.jpg'),
('Spinach', 100, 'images/greens/spinach.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `proteins`
--

CREATE TABLE IF NOT EXISTS `proteins` (
  `name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `proteins`
--

INSERT INTO `proteins` (`name`, `price`, `location`) VALUES
('Bacon', 100, 'images/proteins/bacon.jpg'),
('Beans', 100, 'images/proteins/beans.jpg'),
('Chicken', 100, 'images/proteins/chicken.jpg'),
('Fish Fillet', 100, 'images/proteins/fish_fillet.jpg'),
('Green Grams', 100, 'images/proteins/green_grams.jpg'),
('Ham', 100, 'images/proteins/ham.jpg'),
('Peas And Carrot', 100, 'images/proteins/peas_and_carrot.jpg'),
('Ribs', 100, 'images/proteins/ribs.jpg'),
('Scrambled Egg', 100, 'images/proteins/scrambled_egg.jpg'),
('Soya Beans', 100, 'images/proteins/soya_beans.jpg'),
('Tbone Steak', 100, 'images/proteins/tbone_steak.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `starch`
--

CREATE TABLE IF NOT EXISTS `starch` (
  `name` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `starch`
--

INSERT INTO `starch` (`name`, `price`, `location`) VALUES
('Bananas', 100, 'images/starch/bananas.jpg'),
('Bhajia', 100, 'images/starch/bhajia.JPG'),
('Chapati', 100, 'images/starch/chapati.jpg'),
('Corn', 100, 'images/starch/corn.jpg'),
('Fries', 100, 'images/starch/fries.jpg'),
('Masala Fries', 100, 'images/starch/masala_fries.jpg'),
('Mashed Potato', 100, 'images/starch/mashed_potato.jpg'),
('Pilau', 100, 'images/starch/pilau.JPG'),
('Pizza', 100, 'images/starch/pizza.jpg'),
('Rice', 100, 'images/starch/rice.jpg'),
('Risotto', 100, 'images/starch/risotto.JPG'),
('Ugali', 100, 'images/starch/ugali.png'),
('Yams', 100, 'images/starch/yams.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
