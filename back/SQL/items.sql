CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL,
    user_id INT NOT NULL,
    name VARCHAR(250) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    artist VARCHAR(250),
    state VARCHAR(250) ,
    matiere VARCHAR(250),
    longeur DECIMAL(10,2),
    largeur DECIMAL(10,2),
    hauteur DECIMAL(10,2),
    diam DECIMAL(10,2),
    profondeur DECIMAL(10,2),
    style VARCHAR(250),
    epoque VARCHAR(250),
    year INT,
    category ENUM(
      'mobilier', 'bibelot', 'militaria', 'livre', 'numismatique',
      'tableau', 'carte-postale', 'divers'
    ),
    description TEXT,
    isNew BOOLEAN DEFAULT FALSE,
    img_url VARCHAR(500),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;
