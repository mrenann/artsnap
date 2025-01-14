import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Image as ImageType} from '../../types/photoTypes.ts';
import {styles} from './styles.ts';
import {getPhoto} from '../../api/getPhoto/getPhoto.ts';
import {RoutePropsNavigation} from '../../routes/types.ts';

type DetailsRouteParams = {
  id: string;
};

export const Details = ({route}: RoutePropsNavigation<'Details'>) => {
  const {id} = route.params as DetailsRouteParams;

  const [photo, setPhoto] = useState<ImageType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const data = await getPhoto(id);
        setPhoto(data);
      } catch (error) {
        setError('Erro ao carregar os detalhes da imagem.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotoDetails();
  }, [id]);

  const handleBuy = () => {
    Alert.alert('Compra realizada com sucesso!', 'Obrigado pela compra!');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (error || !photo) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FastImage
        source={{
          uri: photo.urls.full,
          priority: FastImage.priority.high,
          cache: FastImage.cacheControl.immutable,
        }}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{photo.description || 'Sem título'}</Text>
        <Text style={styles.photographer}>Fotógrafo: {photo.user.name}</Text>
        <Text style={styles.category}>Categoria: Fotografia</Text>
        <Text style={styles.resolution}>
          Resolução: {photo.width}x{photo.height}
        </Text>
        <Text style={styles.likes}>Curtidas: {photo.likes}</Text>
        <Text style={styles.price}>Preço: R$ 100,00</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
