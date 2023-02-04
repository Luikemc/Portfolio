import Aplicacoes from '../Aplicacoes/Aplicacoes'
import './Projetos.css'

function Projetos(props){


    const portifolio = [

      {
        nomeProjeto: 'PLACAR',
        imagemProjeto: 'https://placar.abril.com.br/wp-content/uploads/2021/09/cropped-PLACAR-FAVICON.png',
        url: 'https://placar-de-jogo.vercel.app/',
        descricaoProjeto: 'Meu primeiro projeto. Feito em HTML CSS e JS'
      },
      
        {
          nomeProjeto: 'POKEDEX',
          imagemProjeto: 'https://4.bp.blogspot.com/-NClwQIrF9dw/UKZtlzh3BUI/AAAAAAAADIU/UJJlJhrQRHo/s1600/Pokedex_DP.png',
          url: 'https://pokedex-sigma-ebon.vercel.app/',
          descricaoProjeto: 'Uma POKEDEX, feita utilizando HTML CSS JS e com o suporte de uma API'
        },

          {
            nomeProjeto: 'JOGO',
            imagemProjeto: 'https://seresmitologicos.com.br/wp-content/uploads/pegasus-mitologico.jpg',
            url: 'https://www.youtube.com/watch?v=C8UaFN3HfjE&ab_channel=Luizifg',
            descricaoProjeto: 'Jogo- Feito usando APP GAME KIT (AGK). Projeto da faculdade'
          },
          {
            nomeProjeto: 'Sendo Feito',
            imagemProjeto: 'https://w7.pngwing.com/pngs/169/68/png-transparent-architectural-engineering-graphy-work-in-progress-angle-building-text.png',
            url: 'https://w7.pngwing.com/pngs/169/68/png-transparent-architectural-engineering-graphy-work-in-progress-angle-building-text.png',
            descricaoProjeto: 'Projeto Esta em andamento. Estou utilizando React para faze-lo.'
          }

      ]


    const css = {backgroundColor:props.corSecundaria}
    return(
        <section className='projetos' style={css}>
            
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='projetinhos'>
           
                {portifolio.map(port =><Aplicacoes key={port.nomeProjeto}
                nomeProjeto={port.nomeProjeto}
                imagemProjeto={port.imagemProjeto}
                descricaoProjeto={port.descricaoProjeto}
                url={port.url}

      />)}

            </div>
        </section>
    )
}

export default Projetos