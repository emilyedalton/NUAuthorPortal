import React from 'react'
import {Form, Label, Select} from 'semantic-ui-react'

const SelectInput = ({input, width, type, placeholder, multiple, options, meta: {touched, error}})=>{
return (
<div>
<Form.Field error={touched && !!error} width={width}>
<Select value ={input.value || null}
onChange={(e, data) => input.onChange(data.value)}
placeholder ={placeholder} 
options={options}
multiple={multiple}
/>
{touched && error && <Label basic color='red'>{error}</Label>}
</Form.Field>
</div>

)
}

export default SelectInput