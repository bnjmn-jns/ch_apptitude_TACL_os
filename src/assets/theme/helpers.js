export const rtlHelper = (isRtl, leftOrRight) => {
  if (['right', 'left'].includes(leftOrRight)) {
    return [['right', 'left'], ['left', 'right']][Number(leftOrRight === 'left')][Number(isRtl)];
  }
  if (['flex-start', 'flex-end'].includes(leftOrRight)) {
    return [['flex-end', 'flex-start'], ['flex-start', 'flex-end']][Number(leftOrRight === 'flex-start')][Number(isRtl)];
  }
  if (['row', 'row-reverse'].includes(leftOrRight)) {
    return [['row-reverse', 'row'], ['row', 'row-reverse']][Number(leftOrRight === 'row')][Number(isRtl)];
  }
  console.warn(
    "Invalid value supplied to rtl helper! Try one of 'left', 'right', 'row', 'row-reverse', 'flex-start' or 'flex-end'.",
  );
  return 'left';
};
