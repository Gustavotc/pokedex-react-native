import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StackRoutesParamsList } from '@/presentation/routes/Stack.routes';

import { Container, Header, InfoContainer, TabsContainer } from './Styles';
import TopBar from './components/topBar/TopBar';
import { PokemonDetailsPageViewModel } from '@/presentation/viewModel';
import { PokemonTypeColorEnum } from '@/main/utils/PokemonTypeEnum';
import MenuButton from './components/menuButton/MenuButton';
import AboutSection from './components/aboutSection/AboutSection';
import { PokemonImage } from '@/presentation/components';
import StatsSection from './components/statsSection/StatsSection';

type PokemonDetailsPageProps = RouteProp<
  StackRoutesParamsList,
  'PokemonDetailsPage'
>;

type Props = {
  viewModel: PokemonDetailsPageViewModel;
};

const PokemonDetailsPage: React.FC<Props> = ({ viewModel }) => {
  const route = useRoute<PokemonDetailsPageProps>();
  const { pokemonName } = route.params;

  const {
    pokemon,
    loading,
    selectedPage,
    init,
    getPokemonAbilities,
    setSelectedPage,
    fetchPokemonEvolutions,
  } = viewModel.useViewModel();

  useEffect(() => {
    init(pokemonName);
    fetchPokemonEvolutions();
  }, []);

  const renderMenuOptions = () => {
    const options: ['About', 'Stats', 'Evolution'] = [
      'About',
      'Stats',
      'Evolution',
    ];
    return options.map(option => (
      <MenuButton
        key={option}
        title={option}
        color={PokemonTypeColorEnum[pokemon?.types[0] ?? 'normal']}
        selected={selectedPage === option}
        onPress={() => setSelectedPage(option)}
      />
    ));
  };

  return (
    <Container>
      <Header color={PokemonTypeColorEnum[pokemon?.types[0] ?? 'normal']}>
        <TopBar title={pokemonName} />
      </Header>

      {pokemon?.imageUrl && (
        <PokemonImage
          imageUri={pokemon.imageUrl}
          height="35%"
          width="80%"
          style={{
            position: 'absolute',
            top: 100,
            left: '10%',
            zIndex: 1,
          }}
        />
      )}

      <InfoContainer>
        <TabsContainer>{renderMenuOptions()}</TabsContainer>

        {selectedPage === 'About' && (
          <AboutSection
            pokemon={pokemon}
            getPokemonAbilities={getPokemonAbilities}
          />
        )}

        {selectedPage === 'Stats' && (
          <StatsSection
            stats={pokemon?.stats ?? []}
            color={PokemonTypeColorEnum[pokemon?.types[0] ?? 'normal']}
          />
        )}
      </InfoContainer>
    </Container>
  );
};

export default PokemonDetailsPage;
