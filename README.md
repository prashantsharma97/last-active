# `last-active - Human-readable Date Formatting for JavaScript`

by @Prashant sharma

A simple JavaScript package to convert dates into human-readable formats like **"X ago"** (e.g., "1 minute ago", "2 hours ago"). Ideal for showing relative time in applications such as blogs, social media platforms, or dashboards.

---

## Installation

To install the package, use npm:

```bash
npm install last-active
```

---

## Usage

Once installed, you can easily use this package in your JavaScript or React application.

### Basic Example

```javascript
import { formatDate } from "last-active";

const date = "2024-11-14T12:00:00Z"; // ISO 8601 format or any valid date string
console.log(formatDate(date)); // Output: "a few seconds ago"
```

### Full Date Format Example

You can also get the date in a fully formatted style:

```javascript
import { formatFullDate } from "last-active";

const date = "2024-11-14T12:00:00Z";
console.log(formatFullDate(date)); // Output: "2024-11-14 12:00:00"
```

---

## API

### `formatDate(date)`

- **Parameters**:
  - `date` (string or Date object): The date to be formatted. It can be in any valid JavaScript `Date` format or ISO 8601 string.
- **Returns**: A string representing the date in a human-readable format like "a few seconds ago", "2 hours ago", etc.
- **Example**:
  ```javascript
  formatDate("2024-11-14T12:00:00Z"); // "a few seconds ago"
  ```

### `formatFullDate(date)`

- **Parameters**:
  - `date` (string or Date object): The date to be formatted. It can be in any valid JavaScript `Date` format or ISO 8601 string.
- **Returns**: A string representing the date in `YYYY-MM-DD HH:mm:ss` format (common for databases or full date representation).
- **Example**:
  ```javascript
  formatFullDate("2024-11-14T12:00:00Z"); // "2024-11-14 12:00:00"
  ```

---

## Features

- **Human-readable relative time**: Formats dates as "X ago" (e.g., "a minute ago", "2 hours ago").
- **Full date format**: Formats dates as `YYYY-MM-DD HH:mm:ss` for easy database compatibility.
- **Timezone support**: Handles timezone conversion if needed (using Day.js plugins).

---

## License

This package is open-source and available under the [MIT License](LICENSE).

---

## Contributing

We welcome contributions! If you'd like to improve this package or add more features, feel free to fork the repository and submit a pull request.

---

## Example Project

Here is an example of using this package in a **React** component:

### React Component Example

```javascript
import React, { useState, useEffect } from "react";
import { formatDate } from "last-active";

const RecentActivity = () => {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/get-last-updated"); // Example API call
      const json = await data.json();
      setLastUpdated(json.date); // Date from API
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>
        Last updated: {lastUpdated ? formatDate(lastUpdated) : "Loading..."}
      </p>
    </div>
  );
};

export default RecentActivity;
```

---

## Notes

- **Date Format**: The `formatDate()` function expects a valid JavaScript `Date` object or an ISO 8601 string. Ensure that the date provided is valid, or else it will throw an error.
- **Error Handling**: If you provide an invalid date format, the functions will throw an error. Always ensure to validate the input before passing it to the functions.

---

## License

This project is licensed under the MIT License.

---

### How This Works

- **`dayjs`** is used for handling and formatting the dates.
- The **relativeTime plugin** helps in displaying "X ago" format.
- **`localizedFormat`** is for easy formatting with `dayjs()` objects.

---

Yeh README file aapke package ke liye sufficient details provide karti hai, including:

- **Installation** instructions
- **Usage** examples (with code snippets for React and general JavaScript)
- **API** documentation
- **Features**
- **Contributing** guidelines (optional, for open-source projects)
- **License** information

### Conclusion

Is tarah aapka README clear, informative, aur professional hoga. Users ko easily samajh aa jayega ki package kaise install karein, use karein, aur kis tarah ka output expect kar sakte hain.
