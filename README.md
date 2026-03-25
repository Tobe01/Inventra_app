# StockFlow

**Order-driven inventory system for a restaurant (with real-world constraints)**

StockFlow is a modern restaurant operating system, inspired by real-world products used in emerging markets. It models how orders, inventory, and kitchen workflows interact under conditions like unreliable internet and high transaction volume.

---

## 🚀 Overview

StockFlow is designed to reflect how restaurants actually operate:

- Orders are placed through a POS interface
- Each order triggers automatic inventory deduction based on predefined recipes
- Orders move through a lifecycle: Pending → Preparing → Completed
- The system is built with resilience in mind, simulating offline-first behavior and real-time updates

This project focuses on **system behavior**, not just UI.

---

## 🧠 Key Concepts Implemented

### 1. Order-Driven Inventory
Inventory is not manually edited. Instead:
- Each menu item is mapped to ingredients (recipe system)
- When an order is placed, ingredient quantities are deducted automatically

Example:
> 1 Plate of Jollof Rice → 0.25kg Rice  
> 5 Plates → 1.25kg deducted from inventory

---

### 2. Order Lifecycle (State Machine)
Orders transition through clearly defined states:


PENDING → PREPARING → COMPLETED


- **Pending**: New order, not yet handled
- **Preparing**: Kitchen is working on it
- **Completed**: Order fulfilled

---

### 3. Real-Time System Behavior
- Orders appear instantly after being placed
- UI updates dynamically without page reloads
- State transitions reflect immediately across the system

---

### 4. Offline-First Simulation
Designed with unreliable networks in mind:
- Orders can be created while offline
- Data syncs when connection is restored
- Local storage used as a temporary queue

---

### 5. POS-Centric Workflow
The POS (Point of Sale) acts as the system entry point:
- Staff take orders on behalf of customers
- Orders are sent to the kitchen and inventory system simultaneously

---

## 🧱 Features

- POS interface for order creation
- Inventory dashboard (kg/L based tracking)
- Automatic ingredient deduction via recipes
- Orders management (Pending, Preparing, Completed)
- Real-time UI updates
- Offline-first behavior (planned/implemented)
- Activity tracking (optional extension)

---

## 🛠️ Tech Stack

- **Frontend:** React / Next.js
- **State Management:** (e.g., Zustand / Context API)
- **Styling:** Tailwind CSS
- **Data Handling:** Local state + mock API / IndexedDB (for offline support)

---

## 🧩 System Design Thinking

This project goes beyond a typical CRUD application by modeling:

- Event-driven updates (orders triggering inventory changes)
- Multi-state workflows (order lifecycle)
- Data consistency challenges (inventory vs concurrent orders)
- Real-world constraints (network instability)

---

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/tobe01/stockflow.git

# Navigate into project
cd stockflow

# Install dependencies
npm install

# Run development server
npm run dev
📌 Future Improvements
Backend integration (Node.js / Express)
WebSocket-based real-time updates
Payment simulation and transaction logging
Multi-device sync
Role-based access (cashier, manager, kitchen)
🤝 Inspiration

This project is inspired by modern restaurant operating systems and fintech-driven business tools used across emerging markets.

👤 Author

Tobechi Duru
Top-rated Software Engineer

Portfolio: https://tobechiduru.vercel.app
GitHub: https://github.com/Tobe01
LinkedIn: https://www.linkedin.com/in/tobechiduru
📄 License

MIT License


---
