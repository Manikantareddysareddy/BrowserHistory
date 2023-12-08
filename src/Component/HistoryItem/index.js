import './index.css'

const HistoryItems = props => {
  const {HistoryDetails, onDeleteHistroy} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails

  const onDelete = () => {
    onDeleteHistroy(id)
  }
  return (
    <li className="list-container">
      <div className="H-container">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image3" />
        <p className="heading">{title}</p>
        <p className="para1">{domainUrl}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="image4"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItems
