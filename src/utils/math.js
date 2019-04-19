export function toAngle(rad) {
  return 180 * rad / Math.PI;
}

export function toRad(angle) {
  return angle * Math.PI / 180;
}

export function angleFromTransform(transform) {
  let splits = transform.split('(');
  splits = splits[1].split(',');

  const c = parseFloat(splits[2]);
  const d = parseFloat(splits[3]);

  return -toAngle(Math.atan2(c, d)) || 0; // if NaN returns 0
}

export function radFromTransform(transform) {
  let splits = transform.split('(');
  splits = splits[0].split(',');

  return Math.atan2(splits[0]);
}

export function distance(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt((dx * dx) + (dy * dy));
}