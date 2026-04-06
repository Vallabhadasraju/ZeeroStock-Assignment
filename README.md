# 📦 Product Management CRUD Application

A modern, full-featured product inventory management system built with React and Vite. Manage your products efficiently with an intuitive interface featuring real-time data updates, advanced filtering, and a responsive design.

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.18-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Node](https://img.shields.io/badge/Node.js-v16+-339933?style=flat-square&logo=node.js)](https://nodejs.org)

</div>

---

## ✨ Features

### 📊 Core CRUD Operations
- ✅ **Create** new products with detailed information (name, description, price, quantity, tax, discount)
- ✅ **Read** and view all products in an organized table format
- ✅ **Edit** existing product details
- ✅ **Delete** products with confirmation dialogs

### 📈 Dashboard & Analytics
- Real-time inventory tracking
- Product count statistics  
- Low stock alerts
- Recently added products monitoring

### 🔍 Search & Filter
- Search products by name or description
- Advanced filtering capabilities
- Multiple sort options

### 📄 Pagination
- Optimized product listing with pagination controls
- Customizable items per page

### 🎨 Modern UI/UX
- Clean, responsive design with Tailwind CSS
- Smooth animations and transitions
- Mobile-friendly interface
- Comprehensive icon library (Lucide React)

### 🔔 User Feedback
- Toast notifications for actions
- Sweet Alert confirmations for critical operations
- Form validation with React Hook Form

---

## 🛠 Technology Stack

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.2.4 | Build tool & dev server |
| React Router DOM | 7.12.0 | Client-side routing |
| Tailwind CSS | 4.1.18 | Styling |
| Zustand | 5.0.10 | State management |

### UI Components & Libraries
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **ShadCN** - Pre-built UI components
- **React Hook Form** - Form validation
- **Axios** - HTTP client
- **SweetAlert2** - Custom dialogs
- **React Toastify** - Toast notifications
- **Date-fns** - Date manipulation
- **Class Variance Authority** - Component styling

### Backend
- **JSON Server** - Mock REST API for development

---

## 📁 Project Structure

```
CRUD_App/
├── src/
│   ├── components/
│   │   ├── AddProduct.jsx       # Add product form
│   │   ├── EditProduct.jsx      # Edit product form
│   │   ├── Dashboard.jsx        # Dashboard with stats
│   │   ├── Table.jsx            # Products table
│   │   ├── SearchBar.jsx        # Search functionality
│   │   ├── PaginationBar.jsx    # Pagination controls
│   │   ├── ToolsBar.jsx         # Action toolbar
│   │   ├── Layout.jsx           # Main layout wrapper
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Sidebar.jsx          # Sidebar menu
│   │   ├── Form.jsx             # Reusable form component
│   │   ├── Button.jsx           # Reusable button
│   │   ├── Input.jsx            # Reusable input
│   │   └── ui/                  # Pre-built UI components
│   ├── store/
│   │   ├── useProductStore.js      # Product state management
│   │   ├── usePaginationStore.js   # Pagination state
│   │   └── useSettingStore.js      # App settings
│   ├── lib/
│   │   └── utils.js             # Utility functions
│   ├── assets/                  # Static assets
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   ├── App.css                  # Global styles
│   └── index.css                # Base styles
├── json/
│   └── db.json                  # Mock database
├── public/                      # Public assets
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint rules
├── components.json             # Component config
└── jsconfig.json               # JavaScript config
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/crud-app.git
cd crud-app
```

2. **Install dependencies**
```bash
npm install
```

### Development

1. **Start the development server**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

2. **Start the mock backend** (in another terminal)
```bash
json-server --watch json/db.json --port 3000
```

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🛣 Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | MainContent | Dashboard with product table |
| `/add-product` | AddProduct | Create new product form |
| `/edit-product/:id` | EditProduct | Edit existing product |

---

## 📡 API Endpoints

The application uses **JSON Server** as a mock backend. All endpoints operate on the `/products` resource.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Fetch all products |
| GET | `/products/:id` | Fetch product by ID |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

**API Base URL:** `http://localhost:3000`

### Product Object Structure
```json
{
  "id": "p001",
  "name": "Product Name",
  "description": "Product description",
  "price": 99.99,
  "quantity": 50,
  "tax": 10,
  "discount": 0,
  "date": "2026-03-10",
  "image": null
}
```

---

## 📋 Key Components

### SearchBar
Search and filter products in real-time based on keywords.

### PaginationBar
Navigate through product pages with customizable page size.

### ToolsBar
Quick action buttons for common operations.

### Table
Displays all products with edit and delete options.

### Form Components
Reusable form, input, and button components with validation.

### AddProduct & EditProduct
Comprehensive product forms with:
- Input validation
- Error handling
- Success notifications
- Auto-population (for edit)

---

## 🎯 State Management

The app uses **Zustand** for state management with the following stores:

### useProductStore
- Manages product list and data
- Handles CRUD operations
- Tracks inventory statistics
- Manages sorting and filtering

### usePaginationStore
- Manages pagination state
- Current page tracking
- Items per page configuration

### useSettingStore
- Application settings
- User preferences

---

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Class Variance Authority (CVA)** for component variants
- **Tailwind Merge** for class merging
- Responsive design with mobile-first approach
- Custom animations and transitions

---

## 🧪 Features Demonstration

### Adding a Product
1. Navigate to `/add-product`
2. Fill in product details (name, price, quantity, etc.)
3. Submit the form
4. Product is added to the database
5. Toast notification confirms success

### Editing a Product
1. Click the edit icon on any product row
2. Pre-filled form opens with current product data
3. Modify fields as needed
4. Submit to update
5. Table updates automatically

### Deleting a Product
1. Click the delete icon on any product row
2. Confirmation dialog appears
3. Confirm deletion
4. Product is removed from database
5. Table refreshes automatically

### Searching Products
1. Use the search bar to enter keywords
2. Table filters in real-time
3. Results update instantly

---

## 📝 Notes

- The app uses **JSON Server** for development/demo purposes. For production, replace with a real backend API.
- All API calls are made through **Axios** with error handling.
- Form validation is handled using **React Hook Form** for better performance.
- UI feedback includes toast notifications and modal confirmations.

---

## 🚧 Future Enhancements

- [ ] TypeScript support
- [ ] User authentication
- [ ] Product categories and tags
- [ ] Image upload functionality
- [ ] Advanced analytics and reporting
- [ ] Export to CSV/PDF
- [ ] Bulk operations
- [ ] Product recommendations
- [ ] Inventory alerts

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📧 Support

For support, email support@example.com or open an issue in the repository.

---

**Built with ❤️ using React & Vite**
