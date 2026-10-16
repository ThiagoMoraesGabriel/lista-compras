import ItemCompra from './components/ItemCompra';

const compras = [
    {id: 1, nome: 'Maçã', quantidade: 12},
    {id: 2, nome: 'Banana', quantidade: 8},
    {id: 3, nome: 'Laranja', quantidade: 10},
    {id: 4, nome: 'Uva', quantidade: 5},
    {id: 5, nome: 'Pera', quantidade: 7}
];

function App() {
  return(
    <ul>
      {compras.map((produto) => (
          <ItemCompra 
             key={produto.id}
             nome={produto.nome} 
             quantidade={produto.quantidade}
          />
      ))}
    </ul>
  );
};

export default App;


