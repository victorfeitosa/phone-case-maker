export function toAngle(rad) {
  return 180 * rad / Math.PI;
}

export function toRad(angle) {
  return angle * Math.PI / 180;
}

export function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt((dx * dx) + (dy * dy));
}