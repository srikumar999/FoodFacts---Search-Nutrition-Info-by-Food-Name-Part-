.food-card {
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.food-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px var(--shadow);
}

.food-card__img-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--img-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.food-card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
}

.food-card__body {
  padding: 1rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
}

.food-card__name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.food-card__brand {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.food-card__nutrients {
  list-style: none;
  padding: 0;
  margin: 0.6rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
}

.food-card__nutrients li {
  background: var(--chip-bg);
  border-radius: 8px;
  padding: 0.4rem 0.55rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.food-card__nutrients .label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-muted);
}

.food-card__nutrients .value {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
}
