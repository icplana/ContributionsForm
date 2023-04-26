import PropTypes from 'prop-types'
import { ContributionItem } from "./ContributionItem"


export const Contributions = ({ contributions, onDeleteContribution, onEditContribution }) => {



  return (
    <div className="col-11 col-md-5 mt-5">
        <h3>Contribuciones</h3>
        {/* <p> { JSON.stringify (contributions)}</p> */}
        {
            contributions.map( element => (
                    <ContributionItem 
                        key={ element.id }
                        element = { element }
                        onDeleteContribution = { onDeleteContribution } 
                        onEditContribution ={ onEditContribution }
                    />
            )
            )
        }
    </div>
  )
}


Contributions.propTypes = {
    contributions: PropTypes.array,
    onDeleteContribution : PropTypes.func,
    onEditContribution: PropTypes.func
}