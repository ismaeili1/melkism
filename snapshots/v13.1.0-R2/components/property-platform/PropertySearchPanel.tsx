"use client";

import { useState } from "react";

export default function PropertySearchPanel() {
  const [query, setQuery] = useState("");

  return (
    <div
      style={{
        display: "grid",
        gap: "0.75rem",
      }}
    >
      <label htmlFor="property-platform-query">
        Search properties
      </label>

      <input
        id="property-platform-query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by title, location or property type"
        type="search"
      />

      <div aria-live="polite">
        {query
          ? `Searching for: ${query}`
          : "Enter a property search query."}
      </div>
    </div>
  );
}
