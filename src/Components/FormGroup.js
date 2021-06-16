function FormGroup(props) {
  return (
    <div className="form-group">
      <label style={{ 'padding-left': '12px' }} htmlFor={props.htmlFor}>
        {props.label}
      </label>
      {props.children}
    </div>
  )
}

export default FormGroup
