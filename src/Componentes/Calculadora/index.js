import { useState } from 'react';
import './calculadora.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const Calculadora = () => {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operador, setOperador] = useState();

    function inputNum(e) {
        var input = e.target.value;
        if(num===0) {
            setNum(input);
        }else{
            setNum(num + input);
        }
    }

    function clear(e) {
        setNum(0)
    }

    function porcentagem() {
        setNum(num / 100);
    } 

    function mudasinal() {
        if(num>0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e) {
        var operadorInput = e.target.value
        setOperador(operadorInput)
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if(operador === "/") {
            setNum(oldnum / num)
        } else if (operador === "x") {
            setNum(oldnum * num);
        } else if (operador === "-") {
            setNum(oldnum - num);
        } else if (operador === "+") {
            setNum(parseFloat(oldnum) + parseFloat(num));
        }
    }

    // Escopo da calculadora

    return (
        <div>
            <Box m={5}/>
            <Container maxWidth={'sm'} >
                <div className="botoes">
                <Box m={8}/>
                    <div className='resultado'> 
                        <h1 className='resultado-conteudo'>{num}</h1>
                    </div>
                        <button className='botao-set red' onClick={clear}>CE</button>
                        <button className='botao-set' style={ {visibility:"hidden"} }>CE</button>
                        <button className='botao-set' onClick={porcentagem}>%</button>
                        <button className='botao-set' onClick={operatorHandler} value={"/"}>/</button>
                        <button className='botao-set' onClick={inputNum} value={7}>7</button>
                        <button className='botao-set' onClick={inputNum} value={8}>8</button>
                        <button className='botao-set' onClick={inputNum} value={9}>9</button>
                        <button className='botao-set' onClick={operatorHandler} value={"x"}>X</button>
                        <button className='botao-set' onClick={inputNum} value={4}>4</button>
                        <button className='botao-set' onClick={inputNum} value={5}>5</button>
                        <button className='botao-set' onClick={inputNum} value={6}>6</button>
                        <button className='botao-set' onClick={operatorHandler} value={"-"}>-</button>
                        <button className='botao-set' onClick={inputNum} value={1}>1</button>
                        <button className='botao-set' onClick={inputNum} value={2}>2</button>
                        <button className='botao-set' onClick={inputNum} value={3}>3</button>
                        <button className='botao-set' onClick={operatorHandler} value={"+"}>+</button>
                        <button className='botao-set' onClick={mudasinal}>+/-</button>
                        <button className='botao-set' onClick={inputNum} value={0}>0</button>
                        <button className='botao-set' onClick={inputNum} value={"."}>,</button>
                        <button className='botao-set' onClick={calculate}>=</button>
                </div>
            </Container>
            <Box m={5}/>
        </div>
    )
}

export default Calculadora