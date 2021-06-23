/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

/**
 * Run some logic when component is mounted
 * @param {() => (() => void) | void} effect
 */
const useMountEffect = (effect) => {
  useEffect(effect, []);
};

export default useMountEffect;
