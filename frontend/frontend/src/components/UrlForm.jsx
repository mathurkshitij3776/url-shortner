// import { useState } from "react";
// import { shortenUrl } from "../api";

// export default function UrlForm({ setShortUrl }) {
//   const [longUrl, setLongUrl] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = await shortenUrl(longUrl);
//     setShortUrl(data.shortUrl);
//     setLongUrl("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="url"
//         placeholder="Enter long URL"
//         value={longUrl}
//         onChange={(e) => setLongUrl(e.target.value)}
//         required
//       />
//       <button type="submit">Shorten</button>
//     </form>
//   );
// }
import { useState } from "react";
import { shortenUrl } from "../api.jsx";

export default function UrlForm({ setShortUrl }) {
  const [longUrl, setLongUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data } = await shortenUrl(longUrl);
      setShortUrl(data.shortUrl);
      setLongUrl("");
    } catch (err) {
      setError("Failed to shorten URL. Check the backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="url"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
        style={{
          padding: "0.5rem",
          width: "300px",
          marginRight: "0.5rem",
        }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Shortening..." : "Shorten"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
