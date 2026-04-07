# Inventory Search Project

## Features
- Search by product name (case-insensitive)
- Filter by category
- Filter by price range
- Combined filters supported

## Search Logic
Filtering is done dynamically on the backend using query parameters.

## Edge Cases
- Empty query → returns all results
- Invalid price → error handling
- No matches → "No results found"

## Performance Improvement
For large datasets:
- Use database indexing
- Implement pagination
- Use caching (Redis)