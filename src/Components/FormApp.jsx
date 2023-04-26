import PropTypes from 'prop-types'


export const FormApp = ({ name, surnames, email, contribution, onSubmitForm, onInputChange, onResetForm }) => {


  return (
    <div className="mt-5 col-11 col-md-5 mx-4" onSubmit={ onSubmitForm }>
        <form>
            <h3>Que deseas expresar?</h3>
            
            <input 
                type="text"
                name= "name"
                id="name"
                value = { name }
                placeholder="Nombre"
                className="form-control mt-2"
                onChange={ onInputChange }
            />
            
            <input 
                type="text"
                name= "surnames"
                id="surnames"
                value = { surnames }
                placeholder="Apellidos"
                className="form-control mt-2"
                onChange={ onInputChange }
            />
            
            <input 
                type="email"
                name= "email"
                id="email"
                value = { email }
                placeholder="Correo electronico"
                className="form-control mt-2"
                onChange={ onInputChange }
            />
            
            <textarea 
                name="contribution" 
                id="contribution" 
                cols="30" 
                rows="10"
                value = { contribution }
                placeholder='Escribe algo que quieras compartir...'
                className="form-control mt-2"
                onChange={ onInputChange }
            ></textarea>

            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
                Enviar
            </button>


        </form>
            <button
                onClick={ () => onResetForm() }
                className="btn btn-primary mt-2 resetBtn"
                >
                Reset
            </button>

            <p id="alert" className="mt-2"></p>


    </div>
  )
}


FormApp.propTypes = {
    name: PropTypes.string,
    surnames: PropTypes.string,
    email: PropTypes.string,
    contribution: PropTypes.string,
    onInputChange: PropTypes.func,
    onSubmitForm: PropTypes.func,
    onResetForm: PropTypes.func
}