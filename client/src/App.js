
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DisplayData } from './components/DisplayData';



function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.scryfall.com/cards",
  });


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
