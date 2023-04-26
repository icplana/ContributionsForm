import PropTypes from 'prop-types'

export const ContributionItem = ({ onDeleteContribution, onEditContribution, element }) => {
  
    const { contribution, name, id } = element

    return (
    <blockquote className="blockquote card p-3">        
        <p className="card-text mb-4">{ contribution }</p>
        <span className='blockquote-footer'>{ name }</span>
        <div className="">
            <button className='btn btn-info me-4' onClick={ () => onEditContribution( id )}>Editar</button>
            <button className='btn btn-danger' onClick={() => onDeleteContribution( id )}>Eliminar</button> 
        </div>        
    </blockquote>
    // <p>{ contribution }</p>
  )
}

ContributionItem.propTypes = {
    onDeleteContribution: PropTypes.func,
    onEditContribution: PropTypes.func,
    element: PropTypes.object
}