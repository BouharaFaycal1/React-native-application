-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  mer. 09 jan. 2019 à 16:09
-- Version du serveur :  10.1.31-MariaDB
-- Version de PHP :  7.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `id8336828_jeux`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(40) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Anas', 'test', 'test'),
(2, 'Faycal', 'Bb@gamil.com', 'Test'),
(3, 'Mahmoud', 'Bb@gamil.co', 'Te'),
(4, 'Test', 'Test@test.com', 'Test'),
(5, 'Ibrahim', 'Ibrahim@gmai.com', 'okokok'),
(6, 'Mery', 'Mery@hotmail.fr', 'ouioui'),
(14, 'Fafa', 'Fimo.boy06@gmail.com', 'fimo'),
(15, 'Faycal', 'Titi@titi.com', 'titi');

-- --------------------------------------------------------

--
-- Structure de la table `video`
--

CREATE TABLE `video` (
  `id` int(40) NOT NULL,
  `titre` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ville` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `vote` int(40) DEFAULT NULL,
  `id_user` int(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `video`
--

INSERT INTO `video` (`id`, `titre`, `url`, `ville`, `vote`, `id_user`) VALUES
(1, 'Artisan minuiserie : Antonie', 'art2.mp4', 'Avignon', 32, 1),
(2, 'Artisan ebeniste : Mathieu', 'video.mp4', 'Marseille', 6, 2),
(3, 'Artisan des planches : Pierre ', 'art3.mp4', 'Avignon', 28, 3),
(4, 'Artisan scuplteur : Clement', 'art4.mp4', 'Marseille', 13, 4),
(5, 'Artisan bijouterie : Pauline', 'art5.mp4', 'Avignon', 1, 5),
(7, 'Artisan fleuriste: Marie', 'art6.mp4', 'Montpellier', 6, 6),
(33, 'Tata', 'art21.mp4', 'Avignon', 1, 15);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
