CREATE TABLE threads(
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL,
    news_id INT,
    sous_titre VARCHAR(250) NOT NULL,
    description TEXT
) ENGINE=InnoDB;