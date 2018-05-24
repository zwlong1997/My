-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 02, 2018 at 12:33 PM
-- Server version: 5.6.35
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food`
--
CREATE DATABASE IF NOT EXISTS `food` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `food`;

-- --------------------------------------------------------

--
-- Table structure for table `pre_article`
--

CREATE TABLE `pre_article` (
  `art_id` int(11) NOT NULL,
  `art_title` varchar(200) DEFAULT NULL,
  `art_img` varchar(255) DEFAULT NULL,
  `art_content` text,
  `art_time` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='文章表';

-- --------------------------------------------------------

--
-- Table structure for table `pre_config`
--

CREATE TABLE `pre_config` (
  `conf_id` int(11) NOT NULL,
  `conf_title_en` varchar(255) DEFAULT NULL,
  `conf_title_zh` varchar(255) DEFAULT NULL,
  `conf_value` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='配置表';

--
-- Dumping data for table `pre_config`
--

INSERT INTO `pre_config` (`conf_id`, `conf_title_en`, `conf_title_zh`, `conf_value`) VALUES
(1, 'CopyRight', 'CopyRight', 'CopyRight©2003-2015 www.91cy.cn All rigt rederved'),
(2, 'company', '版权所有', '贵族食代牛排有限公司'),
(3, 'ICP', 'ICP备案号', '京ICP备16047255号-3本站信息由会员自主添加，如信息涉及隐私等，网站不承担任何责任！');

-- --------------------------------------------------------

--
-- Table structure for table `pre_food`
--

CREATE TABLE `pre_food` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(150) DEFAULT NULL,
  `food_img` varchar(255) DEFAULT NULL,
  `food_price` decimal(10,2) DEFAULT NULL,
  `food_desc` text,
  `food_time` int(11) DEFAULT NULL,
  `fcate_id` int(11) NOT NULL COMMENT '外键'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='食品表';

-- --------------------------------------------------------

--
-- Table structure for table `pre_food_cate`
--

CREATE TABLE `pre_food_cate` (
  `fcate_id` int(11) NOT NULL,
  `fcate_name` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='食品分类表';

-- --------------------------------------------------------

--
-- Table structure for table `pre_link`
--

CREATE TABLE `pre_link` (
  `link_id` int(11) NOT NULL,
  `link_name` varchar(150) DEFAULT NULL,
  `link_url` varchar(255) DEFAULT NULL,
  `link_img` varchar(255) DEFAULT NULL,
  `link_time` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='友情链接';

--
-- Dumping data for table `pre_link`
--

INSERT INTO `pre_link` (`link_id`, `link_name`, `link_url`, `link_img`, `link_time`) VALUES
(1, '友情链接1', 'http://baidu.com', '../assets/home/img/link1.png', 123123213),
(2, '友情链接2', 'http://baidu.com', '../assets/home/img/link2.png', 123123213),
(3, '友情链接3', 'http://baidu.com', '../assets/home/img/link3.png', 123123213),
(4, '友情链接4', 'http://baidu.com', '../assets/home/img/link4.png', 123123213),
(5, '友情链接5', 'http://baidu.com', '../assets/home/img/link5.png', 123123213),
(6, '友情链接6', 'http://baidu.com', '../assets/home/img/link6.png', 123123213);

-- --------------------------------------------------------

--
-- Table structure for table `pre_shop`
--

CREATE TABLE `pre_shop` (
  `shop_id` int(11) NOT NULL,
  `shop_name` varchar(150) DEFAULT NULL,
  `shop_time` int(11) DEFAULT NULL,
  `shop_img` varchar(255) DEFAULT NULL,
  `scate_id` int(11) NOT NULL,
  `shop_phone` varchar(45) DEFAULT NULL,
  `shop_address` varchar(255) DEFAULT NULL,
  `shop_fax` varchar(45) DEFAULT NULL COMMENT '传真',
  `shop_region` varchar(45) DEFAULT NULL COMMENT '邮编'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='商店表';

-- --------------------------------------------------------

--
-- Table structure for table `pre_shop_cate`
--

CREATE TABLE `pre_shop_cate` (
  `scate_id` int(11) NOT NULL,
  `scate_name` varchar(150) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='商店分类';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pre_article`
--
ALTER TABLE `pre_article`
  ADD PRIMARY KEY (`art_id`);

--
-- Indexes for table `pre_config`
--
ALTER TABLE `pre_config`
  ADD PRIMARY KEY (`conf_id`);

--
-- Indexes for table `pre_food`
--
ALTER TABLE `pre_food`
  ADD PRIMARY KEY (`food_id`),
  ADD KEY `fk_pre_food_pre_food_cate_idx` (`fcate_id`);

--
-- Indexes for table `pre_food_cate`
--
ALTER TABLE `pre_food_cate`
  ADD PRIMARY KEY (`fcate_id`);

--
-- Indexes for table `pre_link`
--
ALTER TABLE `pre_link`
  ADD PRIMARY KEY (`link_id`);

--
-- Indexes for table `pre_shop`
--
ALTER TABLE `pre_shop`
  ADD PRIMARY KEY (`shop_id`),
  ADD KEY `fk_pre_shop_pre_shop_cate1_idx` (`scate_id`);

--
-- Indexes for table `pre_shop_cate`
--
ALTER TABLE `pre_shop_cate`
  ADD PRIMARY KEY (`scate_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pre_article`
--
ALTER TABLE `pre_article`
  MODIFY `art_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pre_config`
--
ALTER TABLE `pre_config`
  MODIFY `conf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `pre_food`
--
ALTER TABLE `pre_food`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pre_food_cate`
--
ALTER TABLE `pre_food_cate`
  MODIFY `fcate_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pre_link`
--
ALTER TABLE `pre_link`
  MODIFY `link_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `pre_shop`
--
ALTER TABLE `pre_shop`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pre_shop_cate`
--
ALTER TABLE `pre_shop_cate`
  MODIFY `scate_id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
