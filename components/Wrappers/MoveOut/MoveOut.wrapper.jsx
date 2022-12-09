import styles from './MoveOut.wrapper.module.css';
import { useEffect, useLayoutEffect, useState, useRef, useCallback } from 'react';
import anime from 'animejs';
import useTheme from '../../../context/Theme.context';

export default function MoveOutWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
