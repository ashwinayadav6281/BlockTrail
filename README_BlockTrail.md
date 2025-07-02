# 🚨 BlockTrail: Safer Route Planner for Women

> A full-stack geospatial application that computes the **safest walking path** for women using real-time streetlight and crime data, powered by graph algorithms and machine learning.

---

## 🧠 Motivation

Many urban areas remain unsafe for women at night due to poor lighting and crime-prone zones. **BlockTrail** solves this problem by using real-world data to help users avoid dark and risky areas — prioritizing safety over speed.

---

## 🌍 Features

- 🗺️ **Interactive Map**: Click to set start and end points
- 🔄 **Real-Time Safe Route**: Computes safest walking path using graph theory (Dijkstra) + safety weights
- 💡 **Streetlight Awareness**: Integrates 6,000+ public lighting positions
- 🚔 **Crime-Aware Routing**: Uses 10,000+ crime reports to influence route safety
- ⚙️ **Customizable**: Balance between distance and safety with tunable weights
- 📱 **Mobile-Responsive UI**

---

## 🛠️ Tech Stack

| Layer         | Tech Used                         |
|---------------|-----------------------------------|
| Frontend      | React.js, Leaflet.js, Axios       |
| Backend       | Node.js, Express.js               |
| Routing Logic | Python, NetworkX, OSMnx           |
| Data Sources  | OpenStreetMap, Open Data Portals  |

---

## 📸 Screenshots

![Map with Route](https://user-images.githubusercontent.com/your-github/blocktrail-map.png)
> Click to mark origin/destination. App computes safest walking route.

---

## 🧪 How It Works

1. **User clicks two points** on the map
2. **Backend invokes Python**, loads a weighted graph of roads
3. **Streetlight density** and **crime history** are used to compute edge safety
4. **Modified Dijkstra's algorithm** finds the safest path
5. Coordinates are returned and rendered as a polyline on the map

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js
- Python 3.x
- VS Code
- (Optional) Google Colab or Jupyter for data processing

---

### 🔧 Local Installation

```bash
git clone https://github.com/YOUR_USERNAME/BlockTrail.git
cd BlockTrail

# Install frontend
cd client
npm install

# Install backend
cd ../server
npm install
```

### ▶️ Run the App

**Backend** (Node + Python):
```bash
cd server
node index.js
```

**Frontend** (React):
```bash
cd ../client
npm start
```

Then visit: `http://localhost:3000`

---

## 📁 Project Structure

```
BlockTrail/
├── client/          # React + Leaflet frontend
├── server/
│   ├── routes/      # Express API route
│   ├── python/      # Graph logic in Python
│   └── index.js     # Node.js server
├── data/            # GraphML, CSVs (not pushed)
```

---

## 🧠 Future Enhancements

- 🔍 Add user safety feedback system
- 📈 Heatmaps of unsafe zones
- 📱 Native mobile app
- 🧠 ML-powered predictive crime scoring

---

## 👩‍💻 Author

**Ashwin Yadav**  
_IIT Kanpur | Software Engineering + Machine Learning_  
🔗 [LinkedIn](https://linkedin.com/in/YOUR_PROFILE)  
📧 ashwin.yadav@email.com

---

## 📜 License

MIT License
