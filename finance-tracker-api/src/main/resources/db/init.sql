CREATE TABLE users (
                       id SERIAL PRIMARY KEY,
                       role VARCHAR(100) NOT NULL DEFAULT 'USER',
                       name VARCHAR(100) NOT NULL,
                       email VARCHAR(100) UNIQUE NOT NULL,
                       password VARCHAR(255) NOT NULL,
                       currency VARCHAR(10) NOT NULL DEFAULT 'USD',
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE accounts (
                          id SERIAL PRIMARY KEY,
                          user_id INT NOT NULL,
                          name VARCHAR(100) NOT NULL,
                          balance DECIMAL(15, 2) NOT NULL DEFAULT 0,
                          account_type VARCHAR(50) NOT NULL,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE categories (
                            id SERIAL PRIMARY KEY,
                            user_id INT NOT NULL,
                            name VARCHAR(100) NOT NULL,
                            type VARCHAR(50) NOT NULL,
                            parent_id INT,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
                            FOREIGN KEY (parent_id) REFERENCES categories (id) ON DELETE SET NULL
);

CREATE TABLE transactions (
                              id SERIAL PRIMARY KEY,
                              user_id INT NOT NULL,
                              account_id INT NOT NULL,
                              category_id INT NOT NULL,
                              amount DECIMAL(15, 2) NOT NULL,
                              type VARCHAR(50) NOT NULL,
                              description TEXT,
                              transaction_date TIMESTAMP NOT NULL,
                              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                              FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
                              FOREIGN KEY (account_id) REFERENCES accounts (id) ON DELETE CASCADE,
                              FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE budgets (
                         id SERIAL PRIMARY KEY,
                         user_id INT NOT NULL,
                         category_id INT NOT NULL,
                         amount DECIMAL(15, 2) NOT NULL,
                         start_date TIMESTAMP NOT NULL,
                         end_date TIMESTAMP NOT NULL,
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
                         FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE savings_goals (
                               id SERIAL PRIMARY KEY,
                               user_id INT NOT NULL,
                               name VARCHAR(100) NOT NULL,
                               target_amount DECIMAL(15, 2) NOT NULL,
                               current_amount DECIMAL(15, 2) NOT NULL DEFAULT 0,
                               goal_date TIMESTAMP NOT NULL,
                               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE notifications (
                               id SERIAL PRIMARY KEY,
                               user_id INT NOT NULL,
                               message TEXT NOT NULL,
                               read BOOLEAN DEFAULT false,
                               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                               FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE reports (
                         id SERIAL PRIMARY KEY,
                         user_id INT NOT NULL,
                         report_type VARCHAR(50) NOT NULL,
                         start_date TIMESTAMP NOT NULL,
                         end_date TIMESTAMP NOT NULL,
                         generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
