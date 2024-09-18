export function isGPSCoordinates(valueToCheck: string): boolean {
  const regex = /^\s*(-?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*(-?((1[0-7]\d|\d{1,2})(\.\d+)?|180(\.0+)?))\s*$/;
  if (regex.test(valueToCheck)) return true
  return false
}



const exportedFunctions = { isGPSCoordinates }

export default exportedFunctions