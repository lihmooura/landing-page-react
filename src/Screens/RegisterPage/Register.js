import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import bg from './Assets/bg.svg';
import './CSS/Register.css';
import './CSS/Register-responsive.css';

const Register = () => {

    const {register, handleSubmit, setValue, setFocus} = useForm();

    const onSubmit = (e) => {
        localStorage.setItem("information", JSON.stringify(e));
        console.log(e)
    }
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data=>{
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            setFocus('addressNumber')
        })
    }
    useEffect(() => {
        wasFormFilled() 
      });

    const wasFormFilled = () => { 
        let information = localStorage.getItem('information')
        if (information)  { 
            let parse = JSON.parse(information)
            console.log("information", parse )
            document.getElementById("name").value = parse.name
            document.getElementById("birth").value = parse.birth
            document.getElementById("cpf").value = parse.cpf

            document.getElementById("cep").value = parse.cpf
            document.getElementById("address").value = parse.cpf
            document.getElementById("addressnumber").value = parse.addressNumber
            document.getElementById("bairro").value = parse.neighborhood
            document.getElementById("city").value = parse.city
            document.getElementById("state").value = parse.uf
        } else { 
            return
        }
    }


    return (
    <div className="Register">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        >
        <label>
            Nome:
            </label>
        <input id='name' name="name"  type="text"  {... register("name" )}/>
        
        <label>
            Data de nascimento:
            </label>
        <input type="date" id='birth' name="Data de nascimento" {... register("birth" )}/>
        
        <label>
            CPF:
            </label>
        <input 
        type="text" id='cpf' name="CPF" {... register("cpf" )} />
        
        <label>
            CEP:
            </label>
        <input 
        type="text" id='cep' {... register('CEP')} onBlur={checkCEP} />
        
        <label>
            Rua:
            </label>
        <input 
        type="text" id='address' {... register("address" )} />
        
        <label>
            Número:
            </label>
        <input 
        type="text" id='addressnumber' {... register("addressNumber" )}/>
        
        <label>
            Bairro:
            </label>
        <input 
        type="text" id='bairro' {... register("neighborhood" )}/>
        
        <label>
            Cidade:
            </label>
        <input 
        type="text" id='city' {... register("city" )}/>
        
        <label>
            Estado:
            </label>
        <input 
        type="text" id='state' {... register('uf' )} />
        
        <button type="submit">Enviar</button>
        </form>

    <div>
        <img className='Register-bg' src={bg}></img>
    </div>
    </div>
    )
}

export default Register;