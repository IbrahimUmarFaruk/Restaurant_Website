export function getCurrentMealTime() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 11) return "breakfast";
  if (hour >= 11 && hour < 16) return "lunch";
  return "dinner"; // covers evening + late night
}