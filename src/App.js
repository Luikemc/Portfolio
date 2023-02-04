import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Projetos from './componentes/Projetos/Projetos';
import Sobremim from './componentes/Sobremim/Sobremim';
import Configcontatos from './componentes/Configcontato/Configcontato';



function App() {

  const projeto = [
    {
      nome: 'Projetos',
      corPrimaria: '#57c278',
      corSecundaria: '#025E73',
    }
  ]

  const sobremim = [
    {
      nomeSobre: 'Sobre Mim',
      corPrimariaSobre: '#0FC2C0',
      corSecundariaSobre: '#024059',
    }
  ]

  const contato = [
    {
      nomeContato: 'Contato',
      corPrimariaContato: '#0CABA8',
      corSecundariaContato: '#024873',
    }
  ]

  
  
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {  
    console.log (colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) }/>

      {sobremim.map(sobre => <Sobremim key={sobre.nomeSobre}
      nomeSobre={sobre.nomeSobre} 
      corPrimariaSobre={sobre.corPrimariaSobre} 
      corSecundariaSobre={sobre.corSecundariaSobre}
        />)}

     {projeto.map(projet => <Projetos key={projet.nome} 
     nome={projet.nome} 
     corPrimaria={projet.corPrimaria} 
     corSecundaria={projet.corSecundaria}
     />)}

      

      {contato.map(conta => <Configcontatos key={conta.nomeContato}
      nomeContato={conta.nomeContato} 
      corPrimariaContato={conta.corPrimariaContato} 
      corSecundariaContato={conta.corSecundariaContato}
        />)}
    </div>
  );
}

export default App;
