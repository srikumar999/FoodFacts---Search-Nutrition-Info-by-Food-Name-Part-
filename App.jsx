.search-bar {
  display: flex;
  gap: 0.75rem;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 0.85rem 1.2rem;
  font-size: 1rem;
  font-family: inherit;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input::placeholder {
  color: var(--text-muted);
}

.search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.search-btn {
  padding: 0.85rem 1.75rem;
  font-size: 0.95rem;
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.04em;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  white-space: nowrap;
}

.search-btn:hover {
  background: var(--accent-dark);
}

.search-btn:active {
  transform: scale(0.97);
}
