-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 30-05-2019 a las 22:06:03
-- Versión del servidor: 5.7.24
-- Versión de PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sged`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deporte`
--

DROP TABLE IF EXISTS `deporte`;
CREATE TABLE IF NOT EXISTS `deporte` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(35) COLLATE utf8_spanish2_ci NOT NULL,
  `tipo` int(11) NOT NULL,
  `capacidad` int(4) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `deporte`
--

INSERT INTO `deporte` (`ID`, `nombre`, `tipo`) VALUES
(2, 'Ajedrez', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrenador`
--

DROP TABLE IF EXISTS `entrenador`;
CREATE TABLE IF NOT EXISTS `entrenador` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nombre`varchar(35) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `entrenador`
--

INSERT INTO `entrenador` (`ID`, `nombre`) VALUES
(43, 'Carlitos Lopera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matricula`
--

DROP TABLE IF EXISTS `matricula`;
CREATE TABLE IF NOT EXISTS `matricula` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `idPracticante` int(11) NOT NULL,
  `idDeporte` int(11) NOT NULL,
  `idCosto` int(11) DEFAULT NULL,
  `gratis` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `matricula`
--

INSERT INTO `matricula` (`ID`, `idPracticante`, `idDeporte`, `idCosto`, `gratis`) VALUES
(2, 2, 2, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `tipoDocumento` varchar(12) COLLATE utf8_spanish2_ci NOT NULL,
  `documento` int(12) NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `apellidos` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `contrasena` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `tipoPerfil` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`ID`, `tipoDocumento`, `documento`, `nombre`, `apellidos`, `contrasena`, `tipoPerfil`) VALUES
(9, 'cc', 10556677, 'Francisco', 'Gonzalez', '123+', 1),
(10, 'CC', 90909090, 'Ricardp', 'Echeverry', '123+', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `practicante`
--

DROP TABLE IF EXISTS `practicante`;
CREATE TABLE IF NOT EXISTS `practicante` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `tipoDocumento` varchar(13) COLLATE utf8_spanish2_ci NOT NULL,
  `documento` varchar(13) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8_spanish2_ci NOT NULL,
  `apellidos` varchar(25) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `tipoDocumentoPadre` varchar(13) COLLATE utf8_spanish2_ci NOT NULL,
  `documentoPadre` varchar(13) COLLATE utf8_spanish2_ci NOT NULL,
  `correoPadre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `tipoRelacion` int(11) NOT NULL,
  `nombrePadre` varchar(25) COLLATE utf8_spanish2_ci NOT NULL,
  `apellidosPadre` varchar(25) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `practicante`
--

INSERT INTO `practicante` (`ID`, `tipoDocumento`, `documento`, `nombre`, `apellidos`, `fechaNacimiento`, `tipoDocumentoPadre`, `documentoPadre`, `correoPadre`, `tipoRelacion`, `nombrePadre`, `apellidosPadre`) VALUES
(2, 'TI', '545456', 'pepito', 'perez', '2019-09-08', 'CC', '43452', 'papa@delhijo.com', 1, 'Pedro', 'Perez');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
