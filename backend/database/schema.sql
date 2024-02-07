-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wildy_gamy
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `amis`
--

DROP TABLE IF EXISTS `amis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playerId1` int NOT NULL,
  `playerId2` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_amis_player1` (`playerId1`),
  KEY `fk_amis_player2` (`playerId2`),
  CONSTRAINT `fk_amis_player1` FOREIGN KEY (`playerId1`) REFERENCES `player` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_amis_player2` FOREIGN KEY (`playerId2`) REFERENCES `player` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amis`
--

/*!40000 ALTER TABLE `amis` DISABLE KEYS */;
/*!40000 ALTER TABLE `amis` ENABLE KEYS */;

--
-- Table structure for table `avatar`
--

DROP TABLE IF EXISTS `avatar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avatar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `rarity` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatar`
--

/*!40000 ALTER TABLE `avatar` DISABLE KEYS */;
INSERT INTO `avatar` VALUES (53,'skeleton1','assets/avatar/skeleton1.png','Rare'),(54,'ange','assets/avatar/ange.png','Epic'),(55,'angel','assets/avatar/angel.png','Legendary'),(56,'anonymous','assets/avatar/anonymous.png','Common'),(57,'bye','assets/avatar/bye.png','Rare'),(58,'cat1','assets/avatar/cat1.png','Epic'),(59,'cat2','assets/avatar/cat2.png','Legendary'),(60,'demon','assets/avatar/demon.png','Common'),(61,'demon1','assets/avatar/demon1.png','Rare'),(62,'demon2','assets/avatar/demon2.png','Epic'),(63,'demon3','assets/avatar/demon3.png','Legendary'),(64,'demon4','assets/avatar/demon4.png','Common'),(65,'dev1','assets/avatar/dev1.png','Rare'),(66,'dev2','assets/avatar/dev2.png','Epic'),(67,'dev3','assets/avatar/dev3.png','Legendary'),(68,'dev4','assets/avatar/dev4.png','Common'),(69,'dev5','assets/avatar/dev5.png','Rare'),(70,'dev6','assets/avatar/dev6.png','Epic'),(71,'dev7','assets/avatar/dev7.png','Legendary'),(72,'dev8','assets/avatar/dev8.png','Common'),(73,'dev9','assets/avatar/dev9.png','Rare'),(74,'dev10','assets/avatar/dev10.png','Epic'),(75,'dog','assets/avatar/dog.png','Legendary'),(76,'elemental1','assets/avatar/elemental1.png','Common'),(77,'elemental2','assets/avatar/elemental2.png','Rare'),(78,'elemental3','assets/avatar/elemental3.png','Epic'),(79,'elemental4','assets/avatar/elemental4.png','Legendary'),(80,'elemental5','assets/avatar/elemental5.png','Common'),(81,'elemental6','assets/avatar/elemental6.png','Rare'),(82,'gobelin','assets/avatar/gobelin.png','Epic'),(83,'gobelinPieces','assets/avatar/gobelinPieces.png','Legendary'),(84,'group1','assets/avatar/group1.png','Common'),(85,'group2','assets/avatar/group2.png','Rare'),(86,'group3','assets/avatar/group3.png','Epic'),(87,'group4','assets/avatar/group4.png','Legendary'),(88,'hero','assets/avatar/hero.png','Common'),(89,'hero1','assets/avatar/hero1.png','Rare'),(90,'hero2','assets/avatar/hero2.png','Epic'),(91,'hero3','assets/avatar/hero3.png','Legendary'),(92,'hero4','assets/avatar/hero4.png','Common'),(93,'hero5','assets/avatar/hero5.png','Rare'),(94,'hero6','assets/avatar/hero6.png','Epic'),(95,'hero7','assets/avatar/hero7.png','Legendary'),(96,'hero8','assets/avatar/hero8.png','Common'),(97,'hero9','assets/avatar/hero9.png','Rare'),(98,'hero10','assets/avatar/hero10.png','Epic'),(99,'hero11','assets/avatar/hero11.png','Legendary'),(100,'hero12','assets/avatar/hero12.png','Common'),(101,'hero13','assets/avatar/hero13.png','Rare'),(102,'hero14','assets/avatar/hero14.png','Epic'),(103,'hero15','assets/avatar/hero15.png','Legendary'),(104,'hero16','assets/avatar/hero16.png','Common'),(105,'hero17','assets/avatar/hero17.png','Rare'),(106,'merci','assets/avatar/merci.png','Epic'),(107,'monster1','assets/avatar/monster1.png','Legendary'),(108,'monster2','assets/avatar/monster2.png','Common'),(109,'monster3','assets/avatar/monster3.png','Rare'),(110,'monster4','assets/avatar/monster4.png','Epic'),(111,'orc1','assets/avatar/orc1.png','Legendary'),(112,'orc2','assets/avatar/orc2.png','Common'),(113,'robot','assets/avatar/robot.png','Rare'),(114,'skeleton2','assets/avatar/skeleton2.png','Epic'),(115,'skeleton3','assets/avatar/skeleton3.png','Legendary'),(116,'skeleton4','assets/avatar/skeleton4.png','Common'),(117,'skeleton5','assets/avatar/skeleton5.png','Rare'),(118,'skeleton6','assets/avatar/skeleton6.png','Epic'),(119,'skeleton7','assets/avatar/skeleton7.png','Legendary'),(120,'skeleton8','assets/avatar/skeleton8.png','Common'),(121,'skeleton9','assets/avatar/skeleton9.png','Rare'),(122,'troll','assets/avatar/troll.png','Epic'),(123,'vampire1','assets/avatar/vampire1.png','Legendary'),(124,'vampire2','assets/avatar/vampire2.png','Common'),(125,'vampire3','assets/avatar/vampire3.png','Rare'),(126,'vampire4','assets/avatar/vampire4.png','Epic'),(127,'welcome','assets/avatar/welcome.png','Legendary'),(128,'zombi1','assets/avatar/zombi1.png','Common'),(129,'zombi2','assets/avatar/zombi2.png','Rare');
/*!40000 ALTER TABLE `avatar` ENABLE KEYS */;

--
-- Table structure for table `bon`
--

DROP TABLE IF EXISTS `bon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bon` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `gain_credit` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bon`
--

/*!40000 ALTER TABLE `bon` DISABLE KEYS */;
INSERT INTO `bon` VALUES (3,'S8YIRAHV',250),(4,'1VF61OGQ',1000),(5,'90LNK0KZ',2000);
/*!40000 ALTER TABLE `bon` ENABLE KEYS */;

--
-- Table structure for table `boutique`
--

DROP TABLE IF EXISTS `boutique`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boutique` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prix` int NOT NULL,
  `avatarId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_boutique` (`avatarId`),
  CONSTRAINT `fk_boutique` FOREIGN KEY (`avatarId`) REFERENCES `avatar` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boutique`
--

/*!40000 ALTER TABLE `boutique` DISABLE KEYS */;
INSERT INTO `boutique` VALUES (1,2000,60),(2,2000,53),(3,1000,54),(4,100,55),(5,10,56),(6,1,57),(7,500,58),(8,9999,59),(9,650,61),(10,450,62),(11,500,63),(12,400,64),(13,10000,65),(14,10,66),(15,990,67),(16,980,68),(17,970,69),(18,470,70),(19,480,71),(20,480,72),(21,350,73),(22,600,74),(23,9000,75),(24,8500,76),(25,7000,77),(26,7620,78),(27,8430,79),(28,3580,80),(29,6855,81),(30,5500,82),(31,6500,83),(32,4500,84),(33,3250,85),(34,8800,86),(35,7000,87),(36,4000,88),(37,2500,89),(38,1500,90),(39,1000,91),(40,8400,92),(41,670,93),(42,7000,94),(43,20,95),(44,400,96),(45,300,97),(46,800,98),(47,900,99),(48,1000,100),(49,1200,101),(50,6300,102),(51,8800,103),(52,3000,104),(53,7400,105),(54,9000,106),(55,850,107),(56,950,108),(57,1250,109),(58,7400,110),(59,9600,111),(60,3600,112),(61,6300,113),(62,7100,114),(63,9600,115),(64,3600,116),(65,1020,117),(66,1025,118),(67,3100,119),(68,3650,120),(69,5500,121),(70,8250,122),(71,3000,123),(72,2500,124),(73,3200,125),(74,500,126),(75,400,127),(76,200,128),(77,100,129);
/*!40000 ALTER TABLE `boutique` ENABLE KEYS */;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playerId` int NOT NULL,
  `avatarId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_collection_player` (`playerId`),
  KEY `fk_collection_avatar` (`avatarId`),
  CONSTRAINT `fk_collection_avatar` FOREIGN KEY (`avatarId`) REFERENCES `avatar` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_collection_player` FOREIGN KEY (`playerId`) REFERENCES `player` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (28,2,54),(31,2,55),(32,2,59),(33,2,53),(34,5,56),(35,5,66);
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;

--
-- Table structure for table `fav`
--

DROP TABLE IF EXISTS `fav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fav` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gameId` int NOT NULL,
  `playerId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_fav_game` (`gameId`),
  KEY `fk_fav_player` (`playerId`),
  CONSTRAINT `fk_fav_game` FOREIGN KEY (`gameId`) REFERENCES `game` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_fav_player` FOREIGN KEY (`playerId`) REFERENCES `player` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fav`
--

/*!40000 ALTER TABLE `fav` DISABLE KEYS */;
/*!40000 ALTER TABLE `fav` ENABLE KEYS */;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

/*!40000 ALTER TABLE `game` DISABLE KEYS */;
/*!40000 ALTER TABLE `game` ENABLE KEYS */;

--
-- Table structure for table `hv`
--

DROP TABLE IF EXISTS `hv`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hv` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playerId` int NOT NULL,
  `avatarId` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_HV_player` (`playerId`),
  KEY `fk_HV_avatar` (`avatarId`),
  CONSTRAINT `fk_HV_avatar` FOREIGN KEY (`avatarId`) REFERENCES `collection` (`avatarId`) ON DELETE CASCADE,
  CONSTRAINT `fk_HV_player` FOREIGN KEY (`playerId`) REFERENCES `collection` (`playerId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hv`
--

/*!40000 ALTER TABLE `hv` DISABLE KEYS */;
/*!40000 ALTER TABLE `hv` ENABLE KEYS */;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `experience` int NOT NULL DEFAULT '0',
  `credit` int NOT NULL DEFAULT '50',
  `membreId` varchar(50) NOT NULL,
  `profilTheme` int NOT NULL DEFAULT '0',
  `lvl` int NOT NULL DEFAULT '1',
  `banner` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `activeAvatar` int DEFAULT NULL,
  `avatarColor` varchar(7) NOT NULL DEFAULT '#989898',
  PRIMARY KEY (`id`),
  UNIQUE KEY `pseudo` (`pseudo`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `membreId` (`membreId`),
  KEY `fk_player_collection` (`activeAvatar`),
  CONSTRAINT `fk_player_collection` FOREIGN KEY (`activeAvatar`) REFERENCES `collection` (`avatarId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (2,'admin','admin','admin','$2a$13$AHX2ZMS8qfEjoIMmHM6fke9kT5Dxf1K6U6It7pFBTOHNe2qu.KIMm','admin@gmail.com',0,50,'1528',4,1,NULL,1,53,'#5280da'),(3,'compte','compte','compte','$2a$13$ZjCYmDzQWNS0QVhybxdE0.p0gHjPU40x8.xbKjdjF7ljdIzVJLtS6','compte@gmail.com',0,50,'1762',0,1,NULL,0,NULL,'#989898'),(4,'testtes','testest','testtestest','$2a$13$dV1u0Por6GylR5frj62qUe59Ence5aTA50DJVqOhfZs.udZEB5/6q','g.pell@gmail.com',0,50,'1691',0,1,NULL,0,NULL,'#989898'),(5,'ghislain','Pellicano','Ghis','$2a$13$TPyqaBJI0puBVJ/rH5wuRezyIKN3ujOIVaKAg4t9R1z2aGIt8BAKe','ghis.pell@gmail.com',0,30,'1318',0,1,NULL,0,NULL,'#989898');
/*!40000 ALTER TABLE `player` ENABLE KEYS */;

--
-- Table structure for table `redeemed`
--

DROP TABLE IF EXISTS `redeemed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `redeemed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `playerId` int NOT NULL,
  `bonId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_redeemed_player` (`playerId`),
  KEY `fk_redeemed_bon` (`bonId`),
  CONSTRAINT `fk_redeemed_bon` FOREIGN KEY (`bonId`) REFERENCES `bon` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_redeemed_player` FOREIGN KEY (`playerId`) REFERENCES `player` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redeemed`
--

/*!40000 ALTER TABLE `redeemed` DISABLE KEYS */;
/*!40000 ALTER TABLE `redeemed` ENABLE KEYS */;

--
-- Table structure for table `scoreboard`
--

DROP TABLE IF EXISTS `scoreboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scoreboard` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gameId` int NOT NULL,
  `playerId` int NOT NULL,
  `score` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_scoreboard_game` (`gameId`),
  KEY `fk_scoreboard_player` (`playerId`),
  CONSTRAINT `fk_scoreboard_game` FOREIGN KEY (`gameId`) REFERENCES `game` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_scoreboard_player` FOREIGN KEY (`playerId`) REFERENCES `player` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scoreboard`
--

/*!40000 ALTER TABLE `scoreboard` DISABLE KEYS */;
/*!40000 ALTER TABLE `scoreboard` ENABLE KEYS */;

--
-- Dumping routines for database 'wildy_gamy'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-07 11:17:30
