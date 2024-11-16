import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import timezone from "dayjs/plugin/timezone.js";
import db from "../../server/dataBase.js";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(timezone);

// Get date from DB and format it
const getFormattedDate = async (req, res) => {
  const { id } = req.params; // Retrieve the date ID from the URL params

  try {
    const [rows] = await db.execute("SELECT * FROM dates WHERE id = ?", [id]); // Query the DB for the date by ID

    // Check if no date was found
    if (rows.length === 0) {
      return res.status(404).json({ error: "Date not found" }); // Return 404 if date not found
    }

    const row = rows[0]; // Get the first (and only) result from the DB
    const formattedDate = dayjs(row.date).fromNow(); // Convert the date to a human-readable format using dayjs

    // Respond with the formatted date and original date
    res.json({ id: row.id, originalDate: row.date, formattedDate });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" }); // Handle any DB-related errors
  }
};

// Add a new date to the DB
const addDate = async (req, res) => {
  const { date } = req.body;

  // Validate the date format using dayjs
  if (!date || !dayjs(date).isValid()) {
    return res.status(400).json({ error: "Invalid date format" });
  }

  // Format the date to ensure it's in a valid MySQL format (YYYY-MM-DD HH:mm:ss)
  const formattedDate = dayjs(date).format("YYYY-MM-DD HH:mm:ss");

  try {
    const [result] = await db.execute("INSERT INTO dates (date) VALUES (?)", [
      formattedDate,
    ]);
    res.status(201).json({ id: result.insertId, date: formattedDate });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
};

export default { getFormattedDate, addDate };
