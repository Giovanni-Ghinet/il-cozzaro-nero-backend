CREATE DATABASE  IF NOT EXISTS `il_cozzaro_nero` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `il_cozzaro_nero`;
-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: il_cozzaro_nero
-- ------------------------------------------------------
-- Server version	8.4.9

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Infuocato del Mare dei Ladri'),(2,'Affumicato dei Relitti'),(3,'Abisso del Kraken'),(4,'Taverna dell\'Ancora Spezzata'),(5,'Maledizione dell\'Ordine delle Anime');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_category` (
  `id_product` bigint unsigned NOT NULL,
  `id_category` bigint unsigned NOT NULL,
  PRIMARY KEY (`id_product`,`id_category`),
  KEY `product_category_id_category_foreign` (`id_category`),
  CONSTRAINT `product_category_id_category_foreign` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  CONSTRAINT `product_category_id_product_foreign` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,1),(4,1),(7,1),(11,1),(14,1),(3,2),(5,2),(6,2),(10,2),(17,2),(2,3),(9,3),(12,3),(20,3),(22,3),(8,4),(13,4),(18,4),(21,4),(24,4),(15,5),(16,5),(19,5),(23,5),(25,5);
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `country` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `availability` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Cozze del Tesoro Insanguinato','Cozze in salsa di pomodoro piccante con un goccio di rum. Un piatto che sa di vendetta e bottino caldo.',16.50,'Italia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(2,'Sgradita Sorpresa del Kraken','Cozze in umido nero al calamaro, accompagnate da tentacoli di polpo affumicato. Attenzione al sapore abissale!',19.90,'Spagna','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(3,'Zuppa del Brigantino Maledetto','Brodo denso di pesce con cozze e croste di pane bruciato. Per marinai dal palato coraggioso.',14.50,'Francia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(4,'Cozze alla Grog dell\'Ammutinamento','Saltate in padella con birra scura, lime, pepe di Cayenna e scorza d\'arancia. Un sapore ribelle.',15.00,'Inghilterra','placeholder.jpg',0,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(5,'Sfida del Capitano Barbabianca','Cozze giganti gratinate con formaggio affumicato e pangrattato al pepe nero. Solo per veri capitani.',22.00,'Portogallo','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(6,'Cozze del Cimitero dei Galeoni','Al vapore con alghe, vino bianco secco e aglio selvatico, servite in una ciotola a forma di teschio.',17.50,'Grecia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(7,'L\'Ultimo Respiro del Marinaio','Cozze in crema di coconut e curry rosso, con un tocco di pepe fantasma. Piccante come una maledizione.',18.00,'Thailandia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(8,'Vendetta dello Scheletro d\'Argento','Cozze fritte in pastella nera al carbone vegetale con salsa allo yogurt e lime.',15.50,'Messico','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(9,'Occhio di Scopario','Cozze al limone e prezzemolo, flambate al rhum speziato. Un lampo di sapore nel buio.',16.00,'Italia','placeholder.jpg',0,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(10,'Scompiglio del Maelstrom','Cozze in salsa agrodolce con peperoni arrosto e un\'insalata di finocchi e arancia rossa.',20.00,'Croazia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(11,'Furia del Vulcano Sottomarino','Cozze saltate in olio di peperoncino lavico e aglio nero, con scaglie di sale affumicato. Ardenti come la furia del mare.',18.50,'Islanda','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(12,'Segreto della Sirena Corallina','Cozze in salsa rosa di corallo (pomodoro e panna) con petali di fiori edibili. Un incanto per gli occhi e il palato.',21.00,'Italia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(13,'Lacrime del Fantasma di Flotta','Cozze in brodo di pesce azzurro al limone e capperi, servite con crostini neri al carbone. Per chi piange il bottino perduto.',17.00,'Irlanda','placeholder.jpg',0,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(14,'Braciere del Pirata Re','Cozze gratinate con tre formaggi (cheddar affumicato, gouda, parmigiano) e scaglie di tartufo nero. Lusso da capitano.',24.50,'Francia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(15,'Vento dell\'Olandese Volante','Cozze al vapore con zenzero, lemongrass e latte di cocco, servite in una zucca scavata. Leggere come la brezza maledetta.',19.00,'Olanda','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(16,'Morso dello Squalo Bianco','Cozze piccantissime con salsa harissa, yogurt greco e menta fresca. Un morso che non dimenticherai.',16.00,'Marocco','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(17,'Oro Liquido del Galeone Sommerso','Cozze in zafferano e vino bianco, con patate novelle e prezzemolo. Un tesoro liquido da gustare.',22.50,'Spagna','placeholder.jpg',0,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(18,'Polvere da Sparo della Ciurma','Cozze impanate con pangrattato al pepe nero e paprika affumicata, fritte e servite con salsa barbecue piccante.',14.50,'Stati Uniti','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(19,'Cantico del Nostromo Ubriaco','Cozze stufate nel rum scuro, miele di canna e chiodi di garofano, con scorza di lime.',18.00,'Giamaica','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(20,'Scheletro di Corallo','Cozze bianche al vino bianco secco, aglio e prezzemolo, servite con ossa di pane (grissini di segale).',15.00,'Grecia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(21,'Soffio del Drago Marino','Cozze in salsa al curry verde tailandese extra piccante, con bambù e peperone rosso. Fuoco liquido.',19.50,'Thailandia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(22,'Teschio e Ossa della Confraternita','Cozze nere (inchiostro di seppia) con riduzione di Porto e scalogno, servite in una casseruola a forma di teschio.',20.00,'Portogallo','placeholder.jpg',0,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(23,'Anello della Sfinge Marina','Cozze in umido con pomodorini ciliegia, olive taggiasche e origano, servite con anelli di calamaro fritti.',17.50,'Italia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(24,'Pergamena Stregata del Cuoco','Cozze involtine in foglie di cavolo nero, ripiene di ricotta e noci, cotte al forno con besciamella al formaggio.',21.00,'Italia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03'),(25,'Ultima Sfida del Corsaro','Cozze giganti alla diavola (peperoncino, aglio, prezzemolo e vino rosso), servite con pane abbrustolito. Per morire o vincere.',23.00,'Italia','placeholder.jpg',1,'2026-06-10 10:24:03','2026-06-10 10:24:03');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `valutation` decimal(2,1) NOT NULL,
  `text` text NOT NULL,
  `id_product` bigint unsigned DEFAULT NULL,
  `author` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reviews_id_product_foreign` (`id_product`),
  CONSTRAINT `reviews_id_product_foreign` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,4.5,'Un tesoro per il palato! Il rum si sente giusto, perfetto dopo una giornata di navigazione.',1,'Capitan Barbascura','Un vero affare da pirata'),(2,5.0,'Il nero del kraken mi ha intimidito, ma il sapore è stupefacente. Da riprovare!',2,'Sirena Nera','Sorpresa abissale riuscita'),(3,3.8,'Zuppa sostanziosa, ma un po\' troppo affumicata per i miei gusti. Ideale per un equipaggio affamato.',3,'Galeotto Malandrino','Brodo coraggioso'),(4,4.0,'Peccato non fosse disponibile, ma l\'odore dalla cucina prometteva bene. La prossima volta!',4,'Mastro Timone','Fantasma di grog'),(5,5.0,'Sfida vinta! Le cozze giganti sono una goduria. Il formaggio affumicato è la ciliegina sulla torta.',5,'Barbabianca Jr','Sfida superata con onore'),(6,4.2,'Servizio da veri pirati: la ciotola a teschio fa la sua figura. Buone ma leggermente salate.',6,'Teschio Parlante','Cimitero di sapori'),(7,4.7,'Il piccante del pepe fantasma è subdolo: prima dolce, poi esplode. Per palati forti. Consigliato!',7,'Maria la Rossa','Respiro affogato nel fuoco'),(8,3.5,'La pastella nera è scenica, ma un po\' secca. La salsa allo yogurt salva il tutto.',8,'Scheletro d\'Argento','Vendetta ok, ma migliorabile'),(9,4.8,'Flambé spettacolare! Il rhum esalta il sapore delle cozze. Uno dei migliori.',9,'Scopario Lesto','Luce nel buio (peccato esaurito)'),(10,4.3,'Agrodolce equilibrato, l\'insalata di finocchi è un contorno rinfrescante. Ideale per l\'estate.',10,'Maelstrom Jones','Scompiglio piacevole'),(11,5.0,'Piccante al punto giusto! Il peperoncino lavico è una scoperta. Da ripetere.',11,'Furia di Vulcano','Lava nel piatto'),(12,4.6,'Salsa rosa delicata e fiori edibili: un piatto da vera principessa pirata.',12,'Sirenetta Marina','Segreto incantevole'),(13,4.0,'Brodo leggero e saporito. Peccato fosse l\'ultimo piatto disponibile.',13,'Fantasma di Flotta','Lacrime salate ma buone'),(14,4.9,'Tre formaggi e tartufo: un lusso che merita ogni doblone. Eccezionale.',14,'Re dei Pirati','Braciere reale'),(15,3.9,'La zucca è originale, ma il sapore del cocco copre un po\' le cozze. Comunque buono.',15,'Olandese Volante','Vento leggero, sapore discreto'),(16,4.4,'Harissa e yogurt: contrasto perfetto. Davvero un \"morso\" deciso.',16,'Squalo Bianco','Morso affilato'),(17,5.0,'Lo zafferano è divino. Questo piatto vale il viaggio fino al galeone sommerso.',17,'Oro Liquido','Tesoro ritrovato (peccato esaurito)'),(18,4.1,'Buone, ma la polvere da sparo (pepe) si sente tanto. Per palati robusti.',18,'Cannoniere Jack','Scoppio di sapore'),(19,4.7,'Il rum e miele creano una salsa densa e dolce. Sembra una poesia ubriaca.',19,'Nostromo Ubriaco','Cantico da ricordare'),(20,4.2,'Semplici ma fatte bene. Le \"ossa di pane\" sono simpatiche.',20,'Corallo Spettrale','Scheletro croccante'),(21,4.5,'Curry verde potente! Chi ama il piccante impazzirà.',21,'Drago Marino','Soffio infuocato'),(22,4.0,'Il nero e il Porto: eleganti. Peccato la disponibilità limitata.',22,'Confraternita Oscura','Teschio e ossa degni'),(23,4.6,'I calamari fritti con le cozze sono un duo vincente.',23,'Sfinge Marina','Anello di sapori'),(24,4.3,'Involtini originali, la besciamella li rende morbidi. Buoni ma impegnativi.',24,'Cuoco Stregato','Pergamena gustosa'),(25,5.0,'Alla diavola come si deve. Le cozze giganti sono un lusso. Imperdibile.',25,'Corsaro Nero','Ultima sfida, vittoria assicurata');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-10 13:03:20
