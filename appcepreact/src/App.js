import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {

  const [dados,setdados] = useState("Aguardando dados...")
  const [cep,setcep] = useState("")
  const [Endereco,setEndereco] = useState("")
  const [Complemento,setComplemento] = useState("")
  const [Cidade,setCidade] = useState("")
  const [UF,setUF] = useState("")
  

  function ReiniciarCEP(){
    setEndereco("");
    setComplemento("");
    setCidade("");
    setUF("");
    setdados('');
    setcep('');
    }

  const handBuscaCEP = () => {

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log("CEP: " + cep);

    fetch(url)
    .then(response=>{
      return response.json();
    })
    .then(data=>{
      console.log(data);
      console.log("Localidade: "+data.localidade);
      
      setEndereco("Endereço: " +data.Endereco)
      setComplemento("Complemento: " +data.Complemento)
      setCidade("Cidade: " + data.localidade)
      setUF("UF: " +data.uf)
      // const resultado = JSON.stringify(data)
      // const valorJSON = JSON.parse(resultado)
      // setdados(valorJSON)
      // setdados('Endereço: '+ data.logradouro + "\n" +
      //          'Complemento: '+ data.complemento + "\n" +
      //          'Cidade: '+ data.localidade + "\n" +
      //          'UF: '+ data.uf
      //         )
    })
  }

  return (
    <div className="App">
      <div>
        <h2>Localidade do CEP</h2>
        <label>CEP</label>
        <Input onChange={(e)=>setcep(e.target.value)} value={cep}/>
        <Button onClick={handBuscaCEP} b="Buscar" cor="verde"/>
        <Button onClick={ReiniciarCEP} b="Reiniciar" cor="vermelho" /> 
      </div>
      <div className='eu'>
        <label>{Endereco}</label>
        <label>{Complemento}</label>
        <label>{Cidade}</label>
        <label>{UF}</label>
        
      </div>
    </div>
  );
}

export default App;
