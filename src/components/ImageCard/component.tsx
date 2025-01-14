import {Text, View} from 'react-native';
import {ImageCardProps} from './types.ts';
import React from 'react';
import {styles} from './styles.ts';
import FastImage from 'react-native-fast-image';

export const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  photographerName,
  category,
}) => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title || 'Sem título'}
        </Text>
        <Text
          style={styles.photographer}
          numberOfLines={1}
          ellipsizeMode="tail">
          {photographerName}
        </Text>
        <Text style={styles.category} numberOfLines={1} ellipsizeMode="tail">
          {category}
        </Text>
      </View>
    </View>
  );
};
