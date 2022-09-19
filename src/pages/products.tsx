import { history } from 'umi';
import { Button } from 'antd';
import React from 'react';
import styles from './products.css';

export default function Page() {
  return (
    <div ref={() => console.log('page')}>
      <Button type="primary" onClick={() => history.push('/')} >Go to Home Page</Button>
    </div>
  );
}
