import Contato from '../Contato/Contato'
import './Configcontato.css'

function Configcontato(props){

    const contatos = [
        {
            nomeContato: 'Github',
            urlContato: 'https://github.com/Luikemc',
            imagensContato: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            info: 'LUIKEMC'
        },
        {
            nomeContato: 'Instagram',
            urlContato: 'https://www.instagram.com/luiz_henriq3_3/',
            imagensContato: 'https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente2.png?resize=696%2C696&ssl=1',
            info: 'luiz_henriq3_3'
        },
        {
            nomeContato: 'Gmail',
            urlContato: 'Email: luikemc@gmail.com',
            imagensContato: 'https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-16.png',
            info: 'luikemc@gmail.com'
        },
        {
            nomeContato: 'whatsapp',
            urlContato: 'https://api.whatsapp.com/send?phone=62995231846&text=Boa%20Tarde,%20vi%20seu%20portifolio.',
            imagensContato: 'https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png',
            info: '(62) 99523-1846'
        }

    ]
    const css = {backgroundColor:props.corSecundariaContato}
    return(
                <section className='contato' style={css}>
                    <h5 style={{borderColor: props.corPrimariaContato}}>{props.nomeContato}</h5>

                    
            
            <div className='contaas'>
           
                {contatos.map(conta =><Contato key={conta.nomeContato}
                nomeContato={conta.nomeContato}
                urlContato={conta.urlContato}
                imagensContato={conta.imagensContato}
                info={conta.info}

      />)}

            </div>
        </section>
    )
}

export default Configcontato