// export default function ShortUrlDisplay({ shortUrl }) {
//   return (
//     shortUrl && (
//       <div>
//         <p>Shortened URL:</p>
//         <a href={shortUrl} target="_blank" rel="noopener noreferrer">
//           {shortUrl}
//         </a>
//       </div>
//     )
//   );
// }
export default function ShortUrlDisplay({ shortUrl }) {
  return (
    shortUrl && (
      <div>
        <p>Shortened URL:</p>
        <a
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          {shortUrl}
        </a>
      </div>
    )
  );
}
