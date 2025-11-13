import React from 'react';
import { Text, View } from 'react-native';

import { EditScreenInfo } from '../components/EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export default function Home ({ title, path, children }: ScreenContentProps)  {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center bg-blue`,
  separator: `h-[1px] my-7 w-4/5 bg-black-200`,
  title: `text-xl font-bold`,
};
