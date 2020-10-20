CREATE DATABASE IF NOT EXISTS Environment_monitoring_Application_Database;


USE Environment_monitoring_Application_Database;

/* drop tables to avoid duplicate table errors when recreating for testing*/

DROP TABLE IF EXISTS `Temperature`, `Humidity`, `Air_Pressure`, `Ambient_Light_Level`;


CREATE TABLE Temperature(
    ID    int(3) NOT NULL AUTO_INCREMENT,
    TodayDate    date NOT NULL,
    TodayTime	 time NOT NULL,
    Temp_Value decimal(4,2),
    PRIMARY KEY (ID)
	);

CREATE TABLE Humidity(
    ID    int(3) NOT NULL AUTO_INCREMENT,
    TodayDate    date NOT NULL,
    TodayTime	 time NOT NULL,
    Humidity_Value decimal(4,2),
    PRIMARY KEY (ID)
	);

CREATE TABLE Air_Pressure(
    ID    int(3) NOT NULL AUTO_INCREMENT,
    TodayDate    date NOT NULL,
    TodayTime	 time NOT NULL,
    Air_Pressure_Value decimal(4,2),
    PRIMARY KEY (ID)
	);

CREATE TABLE Ambient_Light_Level(
    ID    int(3) NOT NULL AUTO_INCREMENT,
    TodayDate    date NOT NULL,
    TodayTime	 time NOT NULL,
    Ambient_Light_Level_Value decimal(4,2),
    PRIMARY KEY (ID)
	);

INSERT INTO `Temperature`(`ID`, `TodayDate`, `TodayTime`, `Temp_Value`) VALUES
    ('1', '2020-10-15', '15:30:45', 35.42),
    ('2', '2020-10-16', '15:30:45', 36.42),
    ('3', '2020-10-17', '15:30:45', 37.42),
    ('4', '2020-10-18', '15:30:45', 38.42),
    ('5', '2020-10-19', '15:30:45', 39.42);

INSERT INTO `Humidity`(`ID`, `TodayDate`, `TodayTime`, `Humidity_Value`) VALUES
    ('1', '2020-10-15', '15:30:45', 35.42),
    ('2', '2020-10-16', '15:30:45', 36.42),
    ('3', '2020-10-17', '15:30:45', 37.42),
    ('4', '2020-10-18', '15:30:45', 38.42),
    ('5', '2020-10-19', '15:30:45', 39.42);

INSERT INTO `Air_Pressure`(`ID`, `TodayDate`, `TodayTime`, `Air_Pressure_Value`) VALUES
    ('1', '2020-10-15', '15:30:45', 35.42),
    ('2', '2020-10-16', '15:30:45', 36.42),
    ('3', '2020-10-17', '15:30:45', 37.42),
    ('4', '2020-10-18', '15:30:45', 38.42),
    ('5', '2020-10-19', '15:30:45', 39.42);

INSERT INTO `Ambient_Light_Level`(`ID`, `TodayDate`, `TodayTime`, `Ambient_Light_Level_Value`) VALUES
    ('1', '2020-10-15', '15:30:45', 35.42),
    ('2', '2020-10-16', '15:30:45', 36.42),
    ('3', '2020-10-17', '15:30:45', 37.42),
    ('4', '2020-10-18', '15:30:45', 38.42),
    ('5', '2020-10-19', '15:30:45', 39.42);