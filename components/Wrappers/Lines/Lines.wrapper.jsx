import styles from './Lines.wrapper.module.css';
import { useEffect, useLayoutEffect, useState, useRef, useCallback } from 'react';
import anime from 'animejs';
import useTheme from '../../../context/Theme.context';

export default function Lines({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
