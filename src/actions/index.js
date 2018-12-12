export const UPDATE_INPUT = 'UPDATE_INPUT';
export const SLOW_UPDATE_INPUT = 'SLOW_UPDATE_INPUT';

export const updateInput = (value) => ({
  type: UPDATE_INPUT,
  value
});

export const slowUpdateInput = (value) => ({
  type: SLOW_UPDATE_INPUT,
  value
})
