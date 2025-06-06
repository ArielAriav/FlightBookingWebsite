import airports from './airports.json';

// Convert the array of airports to a code -> name map for quick lookup
export const airportMap = airports.reduce((map, ap) => {
  map[ap.code] = ap.name;
  return map;
}, {});

// This function normalizes airport codes and names to a standard format
// It returns the airport code if it exists in the map, otherwise it returns the uppercased value
export function normalizeAirport(value) {
  if (!value) return '';
  const upper = value.toUpperCase();
  if (airportMap[upper]) return upper;
  const entry = Object.entries(airportMap).find(
    ([code, name]) => name.toLowerCase() === value.toLowerCase()
  );
  return entry ? entry[0] : upper;
}


// This function displays the airport name and code in a user-friendly format
// If the airport code is not found, it returns the original value
export function displayAirport(value) {
  const code = normalizeAirport(value);
  const name = airportMap[code];
  return name ? `${name} (${code})` : value;
}