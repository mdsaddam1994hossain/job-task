import React from 'react';
import { notification } from 'antd';
import { useState, useEffect } from 'react';

type TNotification = {
  status: any;
  duration: number;
  message: string;
};

export default function useNotification() {
  const [myNotiFication, setMyNotification] = useState<TNotification>();

  useEffect(() => {
    if (myNotiFication) {
      notification.open({
        type: myNotiFication?.status,
        closeIcon: <span></span>,
        duration: myNotiFication.duration,
        message: <p style={{ margin: 0 }}>{myNotiFication.message}</p>,
        style: {   
          background: 'white',
          borderRadius: '8px',      
        }
      });
    }
  }, [myNotiFication]);

  return {
    myNotiFication,
    setMyNotification
  };
}