import { useEffect, useState } from "react"



export const useForm = () => {
    
    const initialValue = JSON.parse(localStorage.getItem('contributions')) || [{
        name: 'Ignasi',
        surnames: 'Casanovas Plana',
        email:'example@example.com',
        contribution: 'You should almost never use double equal in JS due to performance (JS will try con compare all formats of each side) and due to possible bugs.',
        id: Math.round(Math.random()*10000000) ,
    }]
    
    const [form, setForm] = useState({
        name: '',
        surnames: '',
        email:'',
        contribution: '',
        id: Math.round(Math.random()*10000000) ,
    })
    const [contributions, setContributions] = useState( initialValue )

    useEffect(() => {
      localStorage.setItem('contributions', JSON.stringify(contributions))
    
    }, [ contributions ])
    
    
    const onInputChange = ({ target }) => {
        const { name, value } = target        
        setForm({
            ...form,
            [ name ] : value
        })
    }
    
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        
        const name = document.querySelector('#name').value
        const surnames = document.querySelector('#surnames').value
        const email = document.querySelector('#email').value
        const contribution = document.querySelector('#contribution').value
        const alert = document.querySelector('#alert')


        if(!name || !surnames || !email || !contribution) {
            alert.classList.add('alert','alert-danger')
            alert.textContent = 'Todos los campos son obligatorios'
            alert.hidden = false
            setTimeout(() => {
                alert.hidden=true
            }, 3500);
            return            
        }
        alert.hidden=true

        let id = parseInt(document.querySelector('form').getAttribute('data-id'))
        
        if (!isNaN( id )){        
            const tempArr = contributions.map( element => {
                if (element.id === id){
                    return {
                        name : document.querySelector('#name').value,
                        surnames : document.querySelector('#surnames').value,
                        email : document.querySelector('#email').value,
                        contribution : document.querySelector('#contribution').value,
                        id
                    }
                } 
                return element
            })
            
            setContributions(tempArr)
            
        } else {
            id = Math.round(Math.random()*10000000)            
            setForm({ name, surnames, email, contribution, id })            
            setContributions([...contributions, form])            
        }
       
        onResetForm()
    }


    const onResetForm = () => {
        // document.querySelector('#name').value = ''
        // document.querySelector('#surnames').value = ''
        // document.querySelector('#email').value = ''
        // document.querySelector('#contribution').value = ''
        document.querySelector('form').removeAttribute('data-id')
        setForm({
            name: '',
        surnames: '',
        email:'',
        contribution: '',
        id: Math.round(Math.random()*10000000) ,
        })
        

    }
    
   
    const onDeleteContribution = ( id ) => {
        setContributions(contributions.filter( e => e.id !== id))
    }


    const onEditContribution = ( id ) => {
        const element = contributions.find( e => e.id === id )
        document.querySelector('#name').value = element.name
        document.querySelector('#surnames').value = element.surnames
        document.querySelector('#email').value = element.email
        document.querySelector('#contribution').value = element.contribution
        document.querySelector('form').setAttribute('data-id', id)
        setForm( element )
    }
 
 
    return ({
        ...form,
        form,
        setForm,
        onInputChange,
        onSubmitForm,
        onDeleteContribution,
        onEditContribution,
        contributions,
        onResetForm
    }
  )
}
