import React from 'react';
import Image from 'next/image';
import styles from '../app/page.module.css';

export default function Home() {
  return (
      <div className={styles.description}>
        <div>
          <a
            href="https://online.seas.upenn.edu/degrees/mcit-online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/MCITCentral_Logo2.png"
              alt="MCIT Central Logo"
              height={150}
              width={150}
              priority
            />
          </a>
        </div>
        <div>
          <a
            href=""
            target="_self"
            rel="noopener noreferrer"
          >
            <Image
              src="/profile.svg"
              alt="Profile"
              height={40}
              width={40}
              priority
            />
          </a>
        </div>
      </div>
  );
}
