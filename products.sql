-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 05, 2026 at 09:19 AM
-- Server version: 5.7.24
-- PHP Version: 8.3.1

--
-- Database: `supermarket_db`
--

CREATE TABLE `products` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


INSERT INTO `products` (`id`, `name`, `category`, `price`, `stock`, `image`, `created_at`) VALUES
(1, 'Logitech G102', 'Mouse', '700.00', 1, '1777908236437-2022040614471452557_1.jpg', '2026-05-04 15:23:56'),
(2, 'Logitech mx ergo', 'Mouse', '1590.00', 2, '1777969849127-mx-ergo-gallery-02.webp', '2026-05-05 08:30:49');
