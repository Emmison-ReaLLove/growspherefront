-- Table for storing user data
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,            -- Unique ID for each user
    first_name VARCHAR(50) NOT NULL,              -- User's first name
    last_name VARCHAR(50) NOT NULL,               -- User's last name
    username VARCHAR(50) NOT NULL UNIQUE,         -- Unique username
    email VARCHAR(100) NOT NULL UNIQUE,           -- Unique email address
    phone_number VARCHAR(15),                     -- User's phone number
    country VARCHAR(50),                          -- User's country
    password_hash VARCHAR(255) NOT NULL,          -- Hashed password
    coupon_code VARCHAR(50),                      -- Coupon code (if applicable)
    active_package VARCHAR(50) DEFAULT '--',      -- User's selected package
    terms_accepted BOOLEAN NOT NULL DEFAULT 0,    -- Whether terms were accepted
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of user creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Timestamp of the last update
    all_time_earnings DECIMAL(10, 2) DEFAULT 0.00, -- All-time earnings
    gsp_cash DECIMAL(10, 2) DEFAULT 0.00,         -- GSP cash
    sale_commission DECIMAL(10, 2) DEFAULT 0.00,  -- Sale commission
    todays_referrals INT DEFAULT 0,               -- Today's referrals
    total_referrals INT DEFAULT 0                 -- Total referrals
);

-- Table for user activities
CREATE TABLE activities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    activity_type VARCHAR(255) NOT NULL,
    activity_description TEXT NOT NULL,
    related_username VARCHAR(255), -- For referrals, store referred username
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table for marketplace items
CREATE TABLE marketplace (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uploader_id INT NOT NULL,
    item_name VARCHAR(255) NOT NULL,
    item_description TEXT NOT NULL,
    item_price DECIMAL(10, 2) NOT NULL,
    item_image VARCHAR(255),
    uploader_contact VARCHAR(20),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploader_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table for marketplace comments
CREATE TABLE marketplace_comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    commenter_id INT NOT NULL,
    comment TEXT NOT NULL,
    comment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (item_id) REFERENCES marketplace(id) ON DELETE CASCADE,
    FOREIGN KEY (commenter_id) REFERENCES users(id) ON DELETE CASCADE
);
