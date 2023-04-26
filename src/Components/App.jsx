import { useForm } from "../Hooks/useForm"
import { Contributions } from "./Contributions"
import { FormApp } from "./FormApp"



export const App = () => {

    const  { name, 
            surnames, 
            email, 
            contribution,
            onInputChange, 
            onSubmitForm,
            contributions, 
            onEditContribution,
            onDeleteContribution,
            onResetForm

    } = useForm()


  return (
    <div className="row">
        <FormApp 
            name = { name }
            surnames={ surnames }
            email = { email }
            contribution={ contribution }
            onInputChange={ onInputChange }
            onSubmitForm={ onSubmitForm }
            onResetForm={ onResetForm }
        />

        <Contributions 
            contributions={ contributions }
            onDeleteContribution={ onDeleteContribution }
            onEditContribution={ onEditContribution }
        />

    </div>
  )
}
