import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useState} from 'react';
import {searchPhotos} from '../../api/search/search.ts';
import {FlashList} from '@shopify/flash-list';
import ImageCard from '../../components/ImageCard';
import {styles} from './styles.ts';
import {Image} from '../../types/searchTypes.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RoutePropsNavigation} from '../../routes/types.ts';

const PAGE_SIZE = 10;

export const Home = ({}: RoutePropsNavigation<'Home'>) => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const cache: Record<string, Image[]> = {};

  const fetchImages = useCallback(
    async (reset = false) => {
      if (loading || !hasMore) {
        return;
      }

      if (!query.trim()) {
        await loadPopularImages();
        return;
      }

      setLoading(true);

      try {
        const currentPage = reset ? 1 : page;
        const cacheKey = `images_${query}_${currentPage}`;

        if (cache[cacheKey]) {
          setImages(prevImages =>
            reset ? cache[cacheKey] : [...prevImages, ...cache[cacheKey]],
          );
          console.log(
            `⚡ Using cached data for query: "${query}", page: ${currentPage}`,
          );
          setLoading(false);
          return;
        }

        const cachedData = await AsyncStorage.getItem(cacheKey);
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setImages(prevImages =>
            reset ? parsedData : [...prevImages, ...parsedData],
          );
          cache[cacheKey] = parsedData;
          console.log(
            `⚡ Using AsyncStorage cache for query: "${query}", page: ${currentPage}`,
          );
          setLoading(false);
          return;
        }

        const results = await searchPhotos(query, currentPage, PAGE_SIZE);

        if (reset) {
          setImages(results.results);
        } else {
          setImages(prevImages => [...prevImages, ...results.results]);
        }

        if (results.results.length < PAGE_SIZE) {
          setHasMore(false);
        } else {
          setPage(prevPage => prevPage + 1);
        }

        if (results.results.length === 0) {
          Alert.alert('Nenhum resultado', 'Nenhuma imagem encontrada.');
        }

        cache[cacheKey] = results.results;
        await AsyncStorage.setItem(cacheKey, JSON.stringify(results.results));
      } catch (error) {
        console.error('❌ Erro ao carregar as imagens:', error);
        Alert.alert('Erro', 'Erro ao carregar as imagens. Tente novamente.');
      } finally {
        setLoading(false);
      }
    },
    [loading, hasMore, query, page, cache],
  );

  const loadPopularImages = async () => {
    const popularImagesKey = 'popular_images';
    const cachedPopularImages = await AsyncStorage.getItem(popularImagesKey);

    if (cachedPopularImages) {
      const parsedImages = JSON.parse(cachedPopularImages);
      setImages(parsedImages);
    } else {
      const results = await searchPhotos('art', 1, PAGE_SIZE);
      setImages(results.results);
      await AsyncStorage.setItem(
        popularImagesKey,
        JSON.stringify(results.results),
      );
    }
  };

  const handleSearch = () => {
    setPage(1);
    setHasMore(true);
    setImages([]);
    fetchImages(true);
  };

  let onEndReachedCalledDuringMomentum = false;

  const handleEndReached = () => {
    if (!onEndReachedCalledDuringMomentum) {
      fetchImages();
      onEndReachedCalledDuringMomentum = true;
    }
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{marginVertical: 10}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar fotos..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {loading && images.length === 0 ? (
        <Text>Carregando...</Text>
      ) : (
        <FlashList
          numColumns={2}
          data={images}
          renderItem={({item}) => (
            <ImageCard
              id={item.id}
              imageUrl={item.urls.raw}
              title={item.description || 'Sem título'}
              photographerName={item.user.name}
              category={'Sem categoria'}
            />
          )}
          keyExtractor={item => item.id}
          estimatedItemSize={150}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.3}
          ListFooterComponent={renderFooter}
          onMomentumScrollBegin={() => {
            onEndReachedCalledDuringMomentum = false;
          }}
        />
      )}
    </View>
  );
};
