import cl from "./FilterInput.module.css";

export const FilterInput = ({ query, setQuery, ...props }) => (
  <input
    {...props}
    className={cl.input}
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    type="text"
  />
);
