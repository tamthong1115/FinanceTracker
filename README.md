# 💰 Personal Finance Tracker

<div align="center">

![Build Status](https://github.com/TH-NDang/PersonalFinanceWeb/actions/workflows/backend-ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.4-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)

<h3>🚀 Quản lý tài chính cá nhân một cách thông minh và hiệu quả</h3>

</div>

## 📸 Preview

<div align="center">

<details>
<summary><h3>🖥️ Dashboard</h3></summary>

|                            Dashboard Overview                             |
| :-----------------------------------------------------------------------: |
| ![Dashboard](./frontend-finance-tracker/public/screenshots/dashboard.png) |

|                                    Dashboard with Filters                                    |
| :------------------------------------------------------------------------------------------: |
| ![Dashboard Filters](./frontend-finance-tracker/public/screenshots/dashboard-use-filter.png) |

|                                       Export/Import Templates                                        |
| :--------------------------------------------------------------------------------------------------: |
|  📄 [Finance Report (PDF)](./frontend-finance-tracker/public/template-exported/finance-report.pdf)   |
| 📊 [Finance Report (Excel)](./frontend-finance-tracker/public/template-exported/finance-report.xlsx) |

> Download our template files to easily import/export your financial data

</details>

<details>
<summary><h3>💰 Transactions & Budgets & Goal</h3></summary>

|                             Transaction Management                              |                            Budget Planning                            |
| :-----------------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| ![Transactions](./frontend-finance-tracker/public/screenshots/transactions.png) | ![Budgets](./frontend-finance-tracker/public/screenshots/budgets.png) |

|                          Financial Goals                          |
| :---------------------------------------------------------------: |
| ![Goals](./frontend-finance-tracker/public/screenshots/goals.png) |

</details>

<details>
<summary><h3>📱 Settings </h3></summary>

|                                 User Profile                                  |                                  Notification Settings                                  |
| :---------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
| ![Profile](./frontend-finance-tracker/public/screenshots/profile-setting.png) | ![Notification](./frontend-finance-tracker/public/screenshots/notification-setting.png) |

</details>

</div>

## ✨ Tính năng nổi bật

<div align="center">

| 📊 Dashboard trực quan |   💸 Theo dõi thu chi   |  🎯 Mục tiêu tài chính   |
| :--------------------: | :---------------------: | :----------------------: |
|  📅 Quản lý ngân sách  | 📱 Giao diện responsive | 🔄 Import/Export dữ liệu |
|  📈 Báo cáo chi tiết   |  📊 Phân tích xu hướng  | 🔔 Thông báo thông minh  |

</div>

## 🛠️ Tech Stack

<div align="center">

### Frontend

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Backend

![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/-JWT-000000?style=for-the-badge&logo=json-web-tokens)

</div>

## 🚀 Quick Start

```bash
# Frontend
git clone https://github.com/TH-NDang/PersonalFinanceWeb
cd frontend-finance-tracker
npm install && npm run dev

# Backend
cd finance-tracker-api
./mvnw clean install
./mvnw spring-boot:run
```

## 🌐 Environment Setup

```properties
# Backend application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/finance_tracker
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## 👥 Contributors

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=TH-NDang/PersonalFinanceWeb)](https://github.com/TH-NDang/PersonalFinanceWeb/graphs/contributors)

</div>

## 📜 License

<div align="center">

MIT License - See [LICENSE](LICENSE) for details

---

<p>Made with ❤️ by the Personal Finance Tracker Team</p>

</div>
