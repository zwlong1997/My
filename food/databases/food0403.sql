-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 03, 2018 at 10:23 AM
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

--
-- Dumping data for table `pre_article`
--

INSERT INTO `pre_article` (`art_id`, `art_title`, `art_img`, `art_content`, `art_time`) VALUES
(1, '公司简介', '../assets/home/img/pic1.png', '<p>贵族食代牛排是昔日的台湾首富、台湾知名企业贵族食代集团董事长王永庆先生招待贵宾的知名私房料理。严选一头牛的第六至第八对肋骨这六块牛排。是以“一头牛仅供6客”的贵族食代牛排为招牌菜的中高价位直营连锁西餐厅，独具中国口味，全熟牛排，鲜嫩多汁，适合中国人口味，以菜色精致、好吃、服务好、风格高雅、管理专业着称。</p>\r\n				<p>何谓经典，可能就是在品鉴无数美食后，其绝妙的滋味仍旧不能被替代。再次品味时，仍能激起内心的波澜与感动。如此经典，我们将为您重新诠释。全新的摆盘，搭配特制爽口的配菜，全熟风味，您不可辜负的舌尖美味。</p>\r\n				<p>2003年登陆大陆，截至目前，贵族食代牛排在上海、北京、深圳、广州、南京、武汉、成都、重庆等地已经有40余家直营店，成为高端连锁牛排的领导品牌。</p>', 1522719040),
(2, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(3, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(4, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(5, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(6, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(7, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(8, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(9, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(10, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(11, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(12, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(13, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(14, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(15, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(16, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(17, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(18, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(19, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(20, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(21, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(22, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(23, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(24, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(25, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(26, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(27, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(28, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(29, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(30, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(31, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(32, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(33, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(34, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(35, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(36, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(37, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(38, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(39, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(40, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(41, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(42, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(43, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(44, '新闻资讯1', '../assets/home/img/pic2.jpg', '12312312312312', 1522719040),
(45, '品牌故事', '../assets/home/img/pic1.png', '<p>贵族食代牛排是昔日的台湾首富、台湾知名企业贵族食代集团董事长王永庆先生招待贵宾的知名私房料理。严选一头牛的第六至第八对肋骨这六块牛排。是以“一头牛仅供6客”的贵族食代牛排为招牌菜的中高价位直营连锁西餐厅，独具中国口味，全熟牛排，鲜嫩多汁，适合中国人口味，以菜色精致、好吃、服务好、风格高雅、管理专业着称。</p>\r\n				<p>何谓经典，可能就是在品鉴无数美食后，其绝妙的滋味仍旧不能被替代。再次品味时，仍能激起内心的波澜与感动。如此经典，我们将为您重新诠释。全新的摆盘，搭配特制爽口的配菜，全熟风味，您不可辜负的舌尖美味。</p>\r\n				<p>2003年登陆大陆，截至目前，贵族食代牛排在上海、北京、深圳、广州、南京、武汉、成都、重庆等地已经有40余家直营店，成为高端连锁牛排的领导品牌。</p>', 1522719040);

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
(3, 'ICP', 'ICP备案号', '京ICP备16047255号-3本站信息由会员自主添加，如信息涉及隐私等，网站不承担任何责任！'),
(4, 'shop_phone', '总公司热线', '9510 5396'),
(5, 'email', '邮箱', '123123ng@diocoffee.com');

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

--
-- Dumping data for table `pre_food`
--

INSERT INTO `pre_food` (`food_id`, `food_name`, `food_img`, `food_price`, `food_desc`, `food_time`, `fcate_id`) VALUES
(1, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(2, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(3, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(4, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(5, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(6, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(7, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(8, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(9, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(10, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(11, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(12, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(13, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(14, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(15, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(16, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(17, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(18, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(19, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(20, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(21, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(22, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(23, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(24, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(25, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(26, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(27, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(28, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(29, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(30, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(31, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(32, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(33, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(34, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(35, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(36, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(37, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(38, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(39, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1),
(40, '茶漱海鲜汤', '../assets/home/img/food-png1.png', '12.00', '12213123123123', 123123123, 1);

-- --------------------------------------------------------

--
-- Table structure for table `pre_food_cate`
--

CREATE TABLE `pre_food_cate` (
  `fcate_id` int(11) NOT NULL,
  `fcate_name` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='食品分类表';

--
-- Dumping data for table `pre_food_cate`
--

INSERT INTO `pre_food_cate` (`fcate_id`, `fcate_name`) VALUES
(1, '经典牛排'),
(2, '意大利面'),
(3, '风味披萨'),
(4, '甜品小食');

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

--
-- Dumping data for table `pre_shop`
--

INSERT INTO `pre_shop` (`shop_id`, `shop_name`, `shop_time`, `shop_img`, `scate_id`, `shop_phone`, `shop_address`, `shop_fax`, `shop_region`) VALUES
(1, '总公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(2, '苏州分公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(3, '苏州分公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(4, '总公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(5, '总公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(6, '总公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(7, '总公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(8, '总公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031'),
(9, '总公司', 123123123, '../assets/home/img/about-pic1.jpg', 1, '0512-8081 5888', '江苏省苏州市人民路3188号万达广场5幢迪欧大厦', '0512-8081 5566', '215031');

-- --------------------------------------------------------

--
-- Table structure for table `pre_shop_cate`
--

CREATE TABLE `pre_shop_cate` (
  `scate_id` int(11) NOT NULL,
  `scate_name` varchar(150) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='商店分类';

--
-- Dumping data for table `pre_shop_cate`
--

INSERT INTO `pre_shop_cate` (`scate_id`, `scate_name`) VALUES
(1, '总公司');

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
  MODIFY `art_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `pre_config`
--
ALTER TABLE `pre_config`
  MODIFY `conf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `pre_food`
--
ALTER TABLE `pre_food`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `pre_food_cate`
--
ALTER TABLE `pre_food_cate`
  MODIFY `fcate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pre_link`
--
ALTER TABLE `pre_link`
  MODIFY `link_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `pre_shop`
--
ALTER TABLE `pre_shop`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `pre_shop_cate`
--
ALTER TABLE `pre_shop_cate`
  MODIFY `scate_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
