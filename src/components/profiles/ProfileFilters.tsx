export type SortKey = "recommended" | "rating" | "newest" | "popular";

export type ProfileFilterState = {
  query: string;
  category: string;
  location: string;
  minRating: number;
  verifiedOnly: boolean;
  availableOnly: boolean;
  sort: SortKey;
};

export const defaultFilters: ProfileFilterState = {
  query: "",
  category: "all",
  location: "all",
  minRating: 0,
  verifiedOnly: false,
  availableOnly: false,
  sort: "recommended",
};

export function ProfileFilterFields({
  value,
  onChange,
  categories,
  locations,
}: {
  value: ProfileFilterState;
  onChange: (next: ProfileFilterState) => void;
  categories: { slug: string; name: string }[];
  locations: { slug: string; name: string }[];
}) {
  return (
    <div className="space-y-5">
      <fieldset>
        <legend className="mb-2 text-sm text-muted">Category</legend>
        <select
          className="w-full rounded-2xl border border-line bg-bg px-3 py-2"
          value={value.category}
          onChange={(event) => onChange({ ...value, category: event.target.value })}
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <legend className="mb-2 text-sm text-muted">Location</legend>
        <select
          className="w-full rounded-2xl border border-line bg-bg px-3 py-2"
          value={value.location}
          onChange={(event) => onChange({ ...value, location: event.target.value })}
        >
          <option value="all">All locations</option>
          {locations.map((location) => (
            <option key={location.slug} value={location.slug}>
              {location.name}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <legend className="mb-2 text-sm text-muted">Minimum rating</legend>
        <select
          className="w-full rounded-2xl border border-line bg-bg px-3 py-2"
          value={value.minRating}
          onChange={(event) => onChange({ ...value, minRating: Number(event.target.value) })}
        >
          <option value={0}>Any</option>
          <option value={4}>4.0+</option>
          <option value={4.5}>4.5+</option>
          <option value={4.8}>4.8+</option>
        </select>
      </fieldset>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={value.verifiedOnly}
          onChange={(event) => onChange({ ...value, verifiedOnly: event.target.checked })}
        />
        Demo verified only
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={value.availableOnly}
          onChange={(event) => onChange({ ...value, availableOnly: event.target.checked })}
        />
        Listed as available
      </label>
      <fieldset>
        <legend className="mb-2 text-sm text-muted">Sort</legend>
        <select
          className="w-full rounded-2xl border border-line bg-bg px-3 py-2"
          value={value.sort}
          onChange={(event) => onChange({ ...value, sort: event.target.value as SortKey })}
        >
          <option value="recommended">Recommended</option>
          <option value="rating">Rating</option>
          <option value="newest">Newest</option>
          <option value="popular">Most popular</option>
        </select>
      </fieldset>
    </div>
  );
}
