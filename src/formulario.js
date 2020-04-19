import React from 'react';
import './form.css'


class Formulario extends React.Component{

    handleChange = e => {
        console.log({
        name: e.target.name,
        value: e.target.value,
        });
        };
        handleClick = e => {
        console.log('Button was clicked');
        };
        handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submitted');};
    render(){
        return <div className = "contenedor">
            
            
            <form action="">
		<p>Nombre:</p>
		<input onClick={this.handleClick} type="text" class="field" name = "nombre"/> <br/>


		<p>Correo electrónico:</p>
		<input onClick={this.handleClick} type="text" class="field" name = "correo"/> <br/>


		<p>Asunto:</p>
		<input onClick={this.handleClick} type="text" class="field" name = "asunto"/> <br/>


		<p>Mensaje:</p>
		<textarea onClick={this.handleClick} class="field" name = "mensaje"></textarea> <br/>


		<p class="center-content">
			<input type="submit" class="btn btn-green" value="Enviar Datos" onClick={this.handleClick}/>
		</p>


	</form>

            </div>    
}
}


export default Formulario;