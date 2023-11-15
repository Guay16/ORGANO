import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botão'
import './Formulario.css'

const Formulario = ( )=> {
    const times = [
        'Programação',
        'Front end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    } 

            return (
                <section className='formulario'>
                    <form onSubmit={aoSalvar} >
                        <h2> Preencha os dados abaixo para criar o card</h2>
                          <CampoTexto obrigatorio = {true} label="Nome" placeholder ="Digite seu nome"/> 
                          <CampoTexto obrigatorio = {true} label="Cargo" placeholder ="Digite seu cargo"/> 
                          <CampoTexto  label="Imagem" placeholder ="Digite o endereço da imagem"/> 
                          <ListaSuspensa label= "Times" itens={times}/> 
                          <Botao> CRIAR CARD </Botao> 
                          
                    
                    </form>
                </section>
            )

         

}
export default Formulario