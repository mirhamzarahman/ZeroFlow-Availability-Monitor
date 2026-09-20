# 🌊 ZeroFlow Availability Monitor

## 📌 Project Overview

**ZeroFlow Availability Monitor** is a lightweight monitoring utility designed to analyze binary operational status streams and identify the longest uninterrupted inactive period.

The project represents a simplified system health analyzer where:

* `1` → Active / Available state
* `0` → Inactive / Empty state

By scanning status records efficiently, the system detects the longest continuous downtime window.

---

## 🌍 Real-World Conceptual Scenario

Imagine a service monitoring dashboard tracking the availability of a server, production machine, or IoT device.

Each recorded status:

```
1 0 0 1 0
```

represents:

```
Online → Offline → Offline → Online → Offline
```

The system needs to determine the longest period where the service remained unavailable.

This project provides that analysis using an efficient single-pass algorithm.

---

## 💡 Core Concept

The project demonstrates:

* Sequential data analysis
* State tracking
* Pattern recognition
* Maximum consecutive sequence detection
* Efficient linear scanning

The main goal is finding the longest continuous occurrence of a specific state (`0`) inside a binary stream.

---

## ⚙️ How the System Works

The monitor processes the status stream from left to right.

Example:

```
Status Stream:
1 0 0 1 0 0 0 1

Analysis:

1 → Reset inactive counter
0 → Inactive period starts
0 → Continue counting
1 → Store maximum and reset
0 → Start new period
0 → Continue
0 → Longest inactive period found
```

Output:

```
Longest inactive window: 3
```

---

## 🧠 Algorithm Used

### Sliding State Counter

The algorithm maintains two values:

| Variable                | Purpose                                    |
| ----------------------- | ------------------------------------------ |
| `currentInactivePeriod` | Tracks current consecutive inactive states |
| `longestInactivePeriod` | Stores the maximum inactive period found   |

---

## 🔄 Step-by-Step Logic

1. Start with counters set to zero.
2. Read each status value.
3. If the value is inactive (`0`):

   * Increase current inactive count.
   * Update the longest count.
4. If the value is active (`1`):

   * Reset current inactive count.
5. Return the longest inactive duration.

---

## ✨ Key Features

* 🚀 O(n) efficient processing
* 📊 Binary stream analysis
* 🔍 Continuous downtime detection
* 🧩 Simple and maintainable architecture
* ⚡ Suitable for real-time monitoring scenarios

---

## 📖 Example Use Case

### Input

```text
System Status:
1 0 0 1 0 0 0 1
```

### Output

```text
Longest downtime period: 3
```

### Explanation

The system experienced a maximum continuous inactive period of three consecutive status failures.

---

## ⏱️ Complexity Analysis

| Metric           | Complexity |
| ---------------- | ---------- |
| Time Complexity  | O(n)       |
| Space Complexity | O(1)       |

The algorithm only stores counters and does not require additional data structures.

---

## 🛠️ Technologies Used

* JavaScript (Node.js)
* Algorithm Design
* Data Stream Processing Concepts

---

## 📂 Project Structure

```
ZeroFlow-Availability-Monitor/
│
├── src/
│   └── availabilityMonitor.js
│
├── README.md
│
└── package.json
```

---

## 🚀 How to Run

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/zero-flow-availability-monitor.git
```

### Navigate Into Project

```bash
cd zero-flow-availability-monitor
```

### Run Application

```bash
node src/availabilityMonitor.js
```

---

## 📚 Learning Outcomes

Through this project, you can understand:

* How to analyze sequential data efficiently
* How counters can represent system states
* How real-world monitoring logic can be built from simple algorithms
* How to optimize solutions using constant memory

---

## 🔮 Future Improvements

Possible enhancements:

* Add visualization dashboards
* Support live monitoring streams
* Store historical downtime reports
* Add alert notifications
* Support multiple system metrics
* Integrate with server monitoring APIs

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and improve this project.
