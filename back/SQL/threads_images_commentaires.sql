CREATE TABLE threads_images_commentaires(
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL,
    thread_image_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    FOREIGN KEY (thread_image_id) REFERENCES threads_images(id) ON DELETE CASCADE
) ENGINE=InnoDB; 